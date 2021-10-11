export const cameras = {
    fhaz: 'Front Hazard Avoidance',
    rhaz: 'Rear Hazard Avoidance',
    mast: 'Mast',
    chemcam: 'Chemistry',
    mahli: 'Mars Hand Lens Imager',
    mardi: 'Mars Descent Imager',
    navcam: 'Navigation',
    pancam: 'Panoramic',
    minites: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
}
export const camerasByRover = {
    curiosity: ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam'],
    opportunity: ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites'],
    spirit: ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites']
}

export const maxSol = {
    curiosity: 3352,
    opportunity: 6468,
    spirit: 6489
}