document.getElementById('inputSizeAspectRatioWidescreen').onclick = function () {
    sizeWidescreen();
    selectedOp();

};

document.getElementById('standard_input').onclick = function () {
    sizeStandard();
    selectedSt();
};
/*-- Change video size to wide screen --*/

function sizeWidescreen() {
    document.getElementById("video_size").className = "embed-responsive embed-responsive-16by9";
};
/*-- Change drop down menu information to wide screen --*/

function selectedOp() {
    document.getElementById('widescreen').selected = 'selected';
};

/*-- Change video size to normal 4:3 --*/

function sizeStandard() {
    document.getElementById("video_size").className = "embed-responsive embed-responsive-4by3";
}

/*-- Change drop down menu information to normal 4:3 --*/
function selectedSt() {
    document.getElementById('standard').selected = 'selected';
};


function selectedWideB() {
    document.getElementById('standard_input').checked = false;
    document.getElementById('inputSizeAspectRatioWidescreen').checked = true;
};

function selectedStB() {
    document.getElementById('inputSizeAspectRatioWidescreen').checked = false;
    document.getElementById('standard_input').checked = true;
};

document.getElementById('buttonPreview1').onclick = function () {
    var newSrc = '//www.youtube.com/embed/gEPmA3USJdI';

    document.getElementById('newVideo').src = newSrc;
};

function changeScreen() {

    var screenSelect = document.getElementById('inputSizeStandard').value;
    if (screenSelect === 'widescreen16:9') {
        sizeWidescreen();
        selectedWideB();
    }
    if (screenSelect === 'standart4:3') {
        sizeStandard();
        selectedStB();
    }

};


document.getElementById('buttonGetEmbedCode').onclick = function () {
    var optionsOutputArea = document.getElementById('area');
    var license = document.getElementById('inputSelectLicense').value;
    var source_url = document.getElementById('inputSourceURL').value || null;
    var title = document.getElementById('inputTitle').value || null;
    var description = document.getElementById('inputDescription').value || null;
    var inputAudioOnly = document.getElementById('inputAudioOnly').value || false;
    var size = document.getElementById('inputSizeStandard').value;

    optionsOutputArea.className = "textarea_stile_visible";
    optionsOutputArea.value = '{ optoins: {'
        + '"license": "' + license + '",'
        + '"source_url": "' + source_url + '",'
        + '"title": "' + title + '",'
        + '"description": "' + description + '",'
        + '"inputAudioOnly": "' + inputAudioOnly + '",'
        + '"size": "' + size + '",'
        + '}}';
};


//
// document.getElementById('buttonBigForm').onclick = function () {
//
//     document.getElementById("embedModal").className = "modal fade in";
//     document.getElementById('embedModal').style.display = 'block';
// };
//

