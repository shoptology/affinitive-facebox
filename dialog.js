function showDialog(title, message) {
	setPaths();
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');

}
function showErrorDialog(title, message) {
	setPaths();
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
}
function showErrorDialogContextual(el, title, message) {
	setPaths();
	$.facebox('<h2 class="dialog_title"><span>' + title + '</span></h2><div class="dialog_content"><div class="dialog_body">' + message + '</div></div>');
}

function setPaths() {
	$.facebox.settings.loadingImage = 'lib/facebox/facebox/loading.gif';
	$.facebox.settings.closeImage = 'lib/facebox/facebox/closelabel.gif';
}
