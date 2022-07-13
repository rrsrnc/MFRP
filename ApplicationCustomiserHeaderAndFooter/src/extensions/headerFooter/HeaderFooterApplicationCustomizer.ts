import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName,
  PlaceholderProvider
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'HeaderFooterApplicationCustomizerStrings';
import styles from './HeaderAndFooterApplicationCustomizer.module.scss';



const LOG_SOURCE: string = 'HeaderFooterApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHeaderFooterApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HeaderFooterApplicationCustomizer
  extends BaseApplicationCustomizer<IHeaderFooterApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
    let topPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top); 
       if (topPlaceholder) { 
           topPlaceholder.domElement.innerHTML = `<div class="${styles.header}">Welcome To Satia Group of Company</div>`;

           let bottomPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom); 
           if (bottomPlaceholder) { 
             bottomPlaceholder.domElement.innerHTML =
              `<div class="${styles.footer}">&copy; Contact us at 9987654677 , satia@company.com</div>`;
    return Promise.resolve();
             }
        }
  }
}
