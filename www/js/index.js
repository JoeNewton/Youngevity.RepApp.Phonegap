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
    /**
     * Init function. Called from index.html. Adds required listeners
     */
    initialize: function() {
        app.report('initialize');
		this.bind();
    },
    /**
     * Callback for PhoneGaps deviceready event.
     */
    deviceready: function() {
		try{
			// This is an event handler function, which means the scope is the event.
			// So, we must explicitly called `app.report()` instead of `this.report()`.
			app.report('deviceready');
			
			
			// Toggle the state from "pending" to "complete".
			// Accomplished by adding .hide to the pending element and removing
			// .hide from the complete element.
			//document.querySelector('#' + id + ' .pending').className += ' hide';
			//var completeElem = document.querySelector('#' + id + ' .complete');
			//completeElem.className = completeElem.className.split('hide').join('');
			//Add listeners to detect if the App comes online or goes offline
			document.addEventListener("online", app.onAppIsOnline, false);
			document.addEventListener("offline", app.onAppIsOffline, false);
			//Add click listener to connection retry button
			document.getElementById("retryConnection_btn").addEventListener("click", this.retryConnectionHandler, false);
			
			// check for internet connectivity
			if (navigator.connection.type == 'none') {
				app.onAppIsOffline();
				app.report('deviceIsOffline');
			} else {
				app.onAppIsOnline();
				app.report('deviceIsOnline');
			}
		} catch( exception ){
			alert(exception.name + ": " + exception.message);
		}
    },
    /**
     * function called to re-direct to the remote URL
     */
    accessRemoteSite: function(){
        //Get the appropriate remote URL based on the RemoteServerEnvironment config constant & re-direct
        document.location.href =  eval(RemoteServerEnvironment+"_RemoteURL");
		app.report('accessRemoteSite');
    },
    /**
     * A generic logging function
     */
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);
        //alert("Report: " + id);
    },
    /**
     * Callback for when PhoneGap detects that the device is Online
     */
    onAppIsOnline: function () {
        app.report('online');
        //Show the Online Section in the DOM & Hide the Offline Section
        document.getElementById("offline_div").style.display = 'none';
        document.getElementById("online_div").style.display = 'block';
        //Call to re-direct to the remote site
        app.accessRemoteSite();
    },
    /**
     * Callback for when PhoneGap detects that the device is Offline
     */
    onAppIsOffline: function () {
        app.report('offline');
        //Show the Offline Section in the DOM & Hide the Online Section
        document.getElementById("online_div").style.display = 'none';
        document.getElementById("offline_div").style.display = 'block';
        //Hide the SplashScreen
		navigator.splashscreen.hide();
    },
    /**
     * Callback for the re-check connection button click event
     */
    retryConnectionHandler: function () {
        //recheck the connection & re-direct if we came Online
        if (navigator.connection.type != 'none') {
            app.onAppIsOnline();
        }
    },
    /**
     * Add appropriate event listeners for PhoneGap Bootstrapping
     */
	bind: function() {
        document.addEventListener('deviceready', function(){
			app.deviceready();
		},true);
		//alert('added device ready listener');
    }
};