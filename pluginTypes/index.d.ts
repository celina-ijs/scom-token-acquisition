/// <amd-module name="@scom/scom-token-acquisition/index.css.ts" />
declare module "@scom/scom-token-acquisition/index.css.ts" {
    export const customStyles: string;
    export const spinnerStyle: string;
}
/// <amd-module name="@scom/scom-token-acquisition/interface.ts" />
declare module "@scom/scom-token-acquisition/interface.ts" {
    export interface ISwapConfigUI {
        campaignId?: number;
        category: any;
        providers: any;
        commissions?: any;
        tokens?: any;
        defaultChainId: number;
        wallets: any;
        networks: any;
        showHeader?: boolean;
        logo?: string;
        title?: string;
    }
    export interface ISwapData {
        stepName: string;
        data: ISwapConfigUI;
    }
}
/// <amd-module name="@scom/scom-token-acquisition" />
declare module "@scom/scom-token-acquisition" {
    import { Container, Control, ControlElement, Module } from '@ijstech/components';
    import { ISwapData } from "@scom/scom-token-acquisition/interface.ts";
    interface ScomTokenAcquisitionElement extends ControlElement {
        data: ISwapData[];
        onChanged?: (target: Control, activeStep: number) => void;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-token-acquisition']: ScomTokenAcquisitionElement;
            }
        }
    }
    export default class ScomTokenAcquisition extends Module {
        private _data;
        private isRendering;
        onChanged: (target: Control, activeStep: number) => void;
        private stepper;
        private pnlwidgets;
        private widgetsMapper;
        constructor(parent?: Container, options?: any);
        static create(options?: ScomTokenAcquisitionElement, parent?: Container): Promise<ScomTokenAcquisition>;
        get data(): ISwapData[];
        set data(value: ISwapData[]);
        private renderUI;
        private resetData;
        private onStepChanged;
        init(): void;
        render(): any;
    }
}
