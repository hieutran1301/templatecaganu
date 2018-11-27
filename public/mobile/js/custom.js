function init() {
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.register("./serviceWorker.js", {
			scope: "./"
			}).then(async function(subscription){
			if(subscription.active!=null){
				await checkForPageUpdate(subscription);//.then(err =>console.log(err));
				if (Notification.permission === "granted") {
					send(subscription);
					}else if (Notification.permission !== "denied") {
					Notification.requestPermission(async function(permission){
						if (permission === "granted") {
							send(subscription);					
						}
					});
				}
			}
		});
		
	} 
}
init();
async function send(register) {
	const publicVapidKey = "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
	const subscription = await register.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
	});
	cSubscription = localStorage.subscription;
	if(cSubscription == subscription) {
		console.log("Your acces not the first");
	} else {
		localStorage.subscription=JSON.stringify(subscription);	
		if(cSubscription == "") {
			await saveSubcription(subscription);
		} else {
			console.log(subscription);
			console.log(cSubscription);
			await saveSubcription(subscription,cSubscription);
		}
	}
}

function saveSubcription(subscription,cSubscription=null){
	if(cSubscription!=null){
		$.ajax({
			type : 'POST', 
			async: false,
			url : 'https://pushmessage.caganu.com/updateSubscription',
			data : {type : "caganu_mobile" , newSubscription: JSON.stringify(subscription), oldSubscription : cSubscription},			
			success : function(data)  {
			}
		});
	}else{
		$.ajax({
			type : 'POST', 
			async: false,
			url : 'https://pushmessage.caganu.com/insertSubscription',
			data : {type : "caganu_mobile" , subscription: JSON.stringify(subscription)},			
			success : function(data)  {}
		});
	}
}

function urlBase64ToUint8Array(base64String) {
	const padding = "=".repeat((4 - base64String.length % 4) % 4);
	const base64 = (base64String + padding)
	.replace(/\-/g, "+")
	.replace(/_/g, "/");
	const rawData = window.atob(base64);
	const outputArray = new Uint8Array(rawData.length);
	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}

async function checkForPageUpdate(register) { 
    register.addEventListener("updatefound", function() {
		if (navigator.serviceWorker.controller) {
			var installingSW = register.installing;
			installingSW.onstatechange = function() {
				console.info("Service Worker State :", installingSW.state);
				switch(installingSW.state) {
					case 'installed':        
					//toast('Site is updated. Refresh the page.', 5000);
					break;
					case 'redundant':
					throw new Error('The installing service worker became redundant.');
				}
			}
		}
	});
}


