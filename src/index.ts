import process from 'process';
import {Output, OutputItem} from "./output";

class Alfred {
    readonly params: string[] = process.argv.filter((_v, index) => index > 1)
    readonly input: string = process.argv.length > 2 ? process.argv[process.argv.length - 1] : ''
    readonly env = new AlfredEnv()

    output(output: Output, inputMatch?: ('title' | 'subtitle' | 'uid' | 'arg' | 'quicklookurl')[]) {
        const input = this.input?.toLocaleLowerCase()
        const inputArr = this.input.toLocaleLowerCase().split('|').filter(i => i);
        console.log(JSON.stringify({
            ...output,
            items: output.items.filter(i => (inputMatch && input) ?
                inputMatch.some(j => !inputArr.length || inputArr.some(t => t.split('&')
                    .every(k => `${i[j] || ''}`.toLowerCase().includes(k))))
                : true)
        }, null, '\t'))
    }

    log(...data: any[]) {
        console.error(...data)
    }

}

class AlfredEnv {
    readonly preferences: string = process.env['alfred_preferences']!
    readonly preferencesLocalhash: string = process.env['alfred_preferences_localhash']!
    readonly theme: string = process.env['alfred_theme']!
    readonly themeBackground: string = process.env['alfred_theme_background']!
    readonly themeSelectionBackground: string = process.env['alfred_theme_selection_background']!
    readonly ThemeSubtext: string = process.env['alfred_theme_subtext']!
    readonly version: string = process.env['alfred_version']!
    readonly versionBuild: string = process.env['alfred_version_build']!

    readonly workflowBundleid: string = process.env['alfred_workflow_bundleid']!
    readonly workflowCache: string = process.env['alfred_workflow_cache']!
    readonly workflowData: string = process.env['alfred_workflow_data']!
    readonly workflowName: string = process.env['alfred_workflow_name']!
    readonly workflowUid: string = process.env['alfred_workflow_uid']!
    readonly workflowVersion?: string = process.env['alfred_workflow_version']
    readonly debug: boolean = process.env['alfred_debug'] === '1'

    get(key: string): string | undefined {
        return process.env[key];
    }
}



const alfred = new Alfred()
export default alfred
export {Output, OutputItem}

// function pify<B, T extends ((...p: infer B) => void)>(o: T) {
//     return null as T;
// }
//
// const a = pify(fs.readFile)
//
// function test<T extends () => void>(...p: T[]) {
//     console.log(p);
// }

