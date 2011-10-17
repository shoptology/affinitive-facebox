function showDialog(title, message) {
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
} 
function showErrorDialog(title, message) {
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
} 
function showErrorDialogContextual(el, title, message) {
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
}

