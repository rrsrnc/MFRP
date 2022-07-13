var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import * as strings from 'HeaderFooterApplicationCustomizerStrings';
import styles from './HeaderAndFooterApplicationCustomizer.module.scss';
var LOG_SOURCE = 'HeaderFooterApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var HeaderFooterApplicationCustomizer = /** @class */ (function (_super) {
    __extends(HeaderFooterApplicationCustomizer, _super);
    function HeaderFooterApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderFooterApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        var message = this.properties.testMessage;
        if (!message) {
            message = '(No properties were provided.)';
        }
        // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
        var topPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
        if (topPlaceholder) {
            topPlaceholder.domElement.innerHTML = "<div class=\"" + styles.header + "\">Welcome To Satia Group of Company</div>";
            var bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom);
            if (bottomPlaceholder) {
                bottomPlaceholder.domElement.innerHTML =
                    "<div class=\"" + styles.footer + "\">&copy; Contact us at 9987654677 , satia@company.com</div>";
                return Promise.resolve();
            }
        }
    };
    __decorate([
        override
    ], HeaderFooterApplicationCustomizer.prototype, "onInit", null);
    return HeaderFooterApplicationCustomizer;
}(BaseApplicationCustomizer));
export default HeaderFooterApplicationCustomizer;
//# sourceMappingURL=HeaderFooterApplicationCustomizer.js.map