const PrepareFormData = data => {
    //convert data object to form data
    var formData = new FormData();
    for (var key of Object.keys(data)) {
        formData.append(key, data[key]);
        //console.log(key + " -> " + data[key])
    }
    return formData;
}
export default PrepareFormData;