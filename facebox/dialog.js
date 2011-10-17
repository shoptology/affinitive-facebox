// locked on bus
function lockedOnBus()
{
	
	title = "Start A Bus";
	
	message = "You cannot change or start a bus at this time because the bus you are on is eligible for voting.";
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
} 

// join full bus
function fullBus()
{
	
	title = "Join Bus";
	
	message = "This bus is full! Try another one!";
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
} 

// join bus already on bus as passenger
function alreadyOnBusAsPassenger()
{
	
	title = "Join Bus";
	
	message = "You are already on this bus!";
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
} 

// leave bus that you are not on
function leaveBusThatYouAreNotOn() {
	
	title = "You Can't Leave This Bus";
	
	message = "You can't leave this bus because you are not on this bus to begin with!";
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
	
}

// join bus already on bus as driver
function alreadyOnBusAsDriver()
{ 
	title = "Join Bus";
	
	message = "You are already on this bus as the driver!";
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
}

// change bus as passenger
function hoppingOffAndChangingBus(controller)
{
	
	// controller is received from views/components/facebox.php
	message = '<p><form action="' + controller + '" method="post">';
	message += '<p>Let your bus mates know why you are getting off their bus!</p>';
	message += '<input type="text" name="hop_off_reason" size="55" /> (required)</p>';
	message += '<p><div style="text-align:center"><input type="submit" class="button button-small" style="font-weight:bold;" value="Change Bus!"></form></p>';
	message += '</p>';
	
	return message;
}

// hop off as passenger or driver
function hoppingOff(controller)
{
	message = '<p><form action="' + controller + '" method="post">';
	message += '<p>Let your bus mates know why you are getting off their bus!</p>';
	message += '<input type="text" name="hop_off_reason" size="55"> (required)</p>';
	message += '<p><div style="text-align:center"><input type="submit" class="button button-small" value="Leave Bus!"></form></div></p>';
	message += '</p>';
	
	return message;
}

// leave bus as passenger
function leaveThisBusAsPassenger(controller)
{
	
	title = "Leave Bus";
	
	message = "<br /><p>Are you sure you want to leave this bus?</p>";
	
	message += hoppingOff(controller);
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
} 

// leave this bus as driver
function leaveThisBusAsDriver(controller)
{
	title = "Leave Bus";
	
	message = "<br /><p>You are driving this bus. By leaving, your bus will be deleted! Are you sure you want to do this?</p>";
	
	message += hoppingOff(controller);
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
} 

// change bus as passenger
function alreadyOnDifferentBusAsPassenger(controller) 
{
	
	title = "Change Bus";
	
	message = "<br /><p>You are already on a bus! Are you sure you want to get off that bus and get on this one?</p>";
	
	message += hoppingOffAndChangingBus(controller);
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
} 

// DEP_change bus as driver
function alreadyOnDifferentBusAsDriver(controller) 
{
	title = "START A NEW BUS";
	
	message = "<p>You have already started a bus. By joining a new bus your previous bus will be deleted and your passengers will lose their spot!  Are you sure you want to leave the bus you started?</p>";
	
	message += '<p><form action="' + controller + '" method="post">';
	message += '<p>Let your bus mates know why you are abandoning your bus!</p>';
	message += '<input type="text" name="hop_off_reason" size="55"> (required)</p>';
	message += '<p><div style="text-align:center"><input type="submit" class="button button-small" value="Delete old bus and join this one!"></div></form></p>';
	message += '</p>';
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
} 

// start new bus as passenger
function passengerWantsToBeDriver(controller) 
{ 
	title = "START NEW BUS";
	
	message = "<p>You are already on a bus. Are you sure you want to get off that bus and get on this one?</p>";
	
	message += '<p><form action="' + controller + '" method="post">';
	message += '<p>Let your bus mates know why you are abandoning your bus!</p>';
	message += '<input type="text" name="hop_off_reason" size="55"> (required)</p>';
	message += '<p><div style="text-align:center"><input type="submit" class="button button-small" value="Start New Bus!"></form></div></p>';
	message += '</p>';
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');

}

// start new bus as driver
function driverWantsToBeNewDriver(controller)
{
	title = "START NEW BUS";
	
	message = "<p>You have already started a bus. By joining or starting another bus your previous bus will be deleted and your passengers will lose their spot!<br />  Are you sure you want to leave the bus you started?</p>";
	
	message += '<p><form action="' + controller + '" method="post">';
	message += '<p>Let your bus mates know why you are abandoning your bus!</p>';
	message += '<input type="text" name="hop_off_reason" size="55"> (required)</p>';
	message += '<p><div style="text-align:center"><input type="submit" class="button button-small" value="Start New Bus!"></div></form></p>';
	message += '</p>';
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');

}

// join private bus
function privateBus()
{
	title = "Join Bus";
	
	message = "This is a private bus and you may join by invitation only!";
	
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
}


// generic dialog methods
function showDialog(title, message) {
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
} 
function showErrorDialog(title, message) {
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
} 
function showDialogContextual(el, title, message) {
	$.facebox({
		el: el,
		html: '<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>'
	});
}


