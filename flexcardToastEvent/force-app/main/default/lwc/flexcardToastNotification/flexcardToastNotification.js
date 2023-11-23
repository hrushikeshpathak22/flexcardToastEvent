import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class FlexcardToastNotification extends LightningElement {

    connectedCallback(){
        window.addEventListener("customToastEvent", this.toastNotification, false); 
     }

     disconnectedCallback(){
        window.addEventListener("customToastEvent", this.toastNotification, false);
     }

     toastNotification = this.customToastNotification.bind(this);
     
     customToastNotification(event){
        const evt = new ShowToastEvent({
            title: event.detail.title,
            message: event.detail.message,
            variant: event.detail.variant,
          });
          this.dispatchEvent(evt);
     }
}