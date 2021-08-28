function setVersion(id, ver) { // id del selector y ver de version.
    let element = document.getElementById(id);

    if (element) {
        element.innerHTML = ver;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const components = ["node", "chrome", "electron"]
    
    for(const component of components) {
        setVersion(`version${component}`, process.versions[component])
    }
});