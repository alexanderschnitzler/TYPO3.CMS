/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
define(["require","exports","jquery","./Enum/Severity","./Severity"],function(e,t,a,s,i){"use strict";class n{static notice(e,t,a,i){n.showMessage(e,t,s.SeverityEnum.notice,a,i)}static info(e,t,a,i){n.showMessage(e,t,s.SeverityEnum.info,a,i)}static success(e,t,a,i){n.showMessage(e,t,s.SeverityEnum.ok,a,i)}static warning(e,t,a,i){n.showMessage(e,t,s.SeverityEnum.warning,a,i)}static error(e,t,a=0,i){n.showMessage(e,t,s.SeverityEnum.error,a,i)}static showMessage(e,t,n=s.SeverityEnum.info,r=this.duration,o=[]){const l=i.getCssClass(n);let c="";switch(n){case s.SeverityEnum.notice:c="lightbulb-o";break;case s.SeverityEnum.ok:c="check";break;case s.SeverityEnum.warning:c="exclamation";break;case s.SeverityEnum.error:c="times";break;case s.SeverityEnum.info:default:c="info"}r=void 0===r?this.duration:"string"==typeof r?parseFloat(r):r,null!==this.messageContainer&&null!==document.querySelector("#alert-container")||(this.messageContainer=a("<div>",{id:"alert-container"}).appendTo("body"));const d="notification-"+Math.random().toString(36).substr(2,5),u=a('<div id="'+d+'" class="alert alert-'+l+' alert-dismissible fade" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true"><i class="fa fa-times-circle"></i></span><span class="sr-only">Close</span></button><div class="media"><div class="media-left"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-'+c+' fa-stack-1x"></i></span></div><div class="media-body"><h4 class="alert-title"></h4><p class="alert-message text-pre-wrap"></p></div></div><div class="alert-actions"></div></div>');u.find(".alert-title").text(e),u.find(".alert-message").text(t);const f=u.find(".alert-actions");if(o.length>0)for(let e of o){const t=a("<a />",{href:"#",title:e.label});t.text(e.label),t.on("click",t=>{u.clearQueue();const a=t.currentTarget;a.classList.add("executing"),f.find("a").not(a).addClass("disabled"),e.action.execute(a).then(()=>{u.alert("close")})}),f.append(t)}else f.remove();u.on("close.bs.alert",e=>{e.preventDefault();const t=a(e.currentTarget);t.clearQueue().queue(e=>{t.removeClass("in"),e()}).slideUp(()=>{t.remove()})}),u.appendTo(this.messageContainer),u.delay(200).queue(e=>{u.addClass("in"),e()}),r>0&&u.delay(1e3*r).queue(e=>{u.alert("close"),e()})}}let r;n.duration=5,n.messageContainer=null;try{parent&&parent.window.TYPO3&&parent.window.TYPO3.Notification&&(r=parent.window.TYPO3.Notification),top&&top.TYPO3.Notification&&(r=top.TYPO3.Notification)}catch(e){}return r||(r=n,"undefined"!=typeof TYPO3&&(TYPO3.Notification=r)),r});