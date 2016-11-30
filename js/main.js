
document.getElementById('inputSizeAspectRatioWidescreen').onclick = function (){
    sizeWidescreen();
    selectedOp ();

};

document.getElementById('standard_input').onclick = function (){
    sizeStandard();
    selectedSt()
};

function sizeWidescreen() {
    document.getElementById("video_size").className = "embed-responsive embed-responsive-16by9";
}

function selectedOp() {
    document.getElementById('widescreen').selected = 'selected'
};

function sizeStandard() {
    document.getElementById("video_size").className = "embed-responsive embed-responsive-4by3";
}

function selectedSt() {
    document.getElementById('standard').selected = 'selected'
};


document.getElementById('buttonPreview1').onclick = function (){
    var newSrc = '//www.youtube.com/embed/gEPmA3USJdI';

    document.getElementById('newVideo').src = newSrc;
};

document.getElementById('buttonGetEmbedCode').onclick=function(){
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