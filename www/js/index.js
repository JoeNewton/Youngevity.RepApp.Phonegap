/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    initialize: function() {
        app.report('initialize');
		this.bind();
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
        document.addEventListener("online", app.onAppIsOnline, false);
        document.addEventListener("offline", app.onAppIsOffline, false);
        document.getElementById("retryConnection_btn").addEventListener("click", this.retryConnectionHandler, false);
		// check for internet connectivity
        if (navigator.connection.type == 'none') {
            app.onAppIsOffline();
			app.report('deviceIsOffline');
        } else {
            app.onAppIsOnline();
			app.report('deviceIsOnline');
        }
    },
    accessRemoteSite: function(){
        document.location.href = 'http://www.youngevity.reurgency.com/90forLifeMobile/'; //DEV
		document.location.href = 'http://appstest.youngevity.com/90forLifeMobile/'; //STAGING
		//document.location.href = 'https://apps.youngevity.com/90ForLifeMobile/'; //PROD
		app.report('accessRemoteSite');
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);
        //alert("Report: " + id);
        // Toggle the state from "pending" to "complete" for the reported ID.
        // Accomplished by adding .hide to the pending element and removing
        // .hide from the complete element.
        if (id == 'deviceready') {
            document.querySelector('#' + id + ' .pending').className += ' hide';
            var completeElem = document.querySelector('#' + id + ' .complete');
            completeElem.className = completeElem.className.split('hide').join('');
        }
    },
    onAppIsOnline: function () {
        app.report('online');
        document.getElementById("offline_div").style.display = 'none';
        document.getElementById("online_div").style.display = 'block';
        app.accessRemoteSite();
    },
    //Call When app goes offline
    onAppIsOffline: function () {
        app.report('offline');
        document.getElementById("online_div").style.display = 'none';
        document.getElementById("offline_div").style.display = 'block';
		navigator.splashscreen.hide();
    },
    //Called from offline mode div to re-check connection
    retryConnectionHandler: function () {
        if (navigator.connection.type != 'none') {
            app.onAppIsOnline();
        }
    },
	bind: function() {
        document.addEventListener('deviceready', function(){
			app.deviceready();
		},true);
		//alert('added device ready listener');
    }
};