// ag-grid-react v13.3.0
import { BaseComponentWrapper, FrameworkComponentWrapper, WrapableInterface } from "tf-ag-grid";
export declare class ReactFrameworkComponentWrapper extends BaseComponentWrapper<WrapableInterface> implements FrameworkComponentWrapper {
    private agGridReact;
    createWrapper(ReactComponent: {
        new (): any;
    }): WrapableInterface;
}
