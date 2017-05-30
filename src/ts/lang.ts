var lang = navigator.language.substr(0,2);

var label_maps: { [label: string]: {[lang: string]: string}} = {
    'Video Quality': {
        fr: 'Qualité Vidéo',
        es: 'Calidad de Video',
    },
    'Speed': {
        fr: 'Vitesse',
        es: 'Velocidad',
    },
    'Audio Track': {
        fr: 'Piste Audio',
        es: 'Pista de Audio',
    },
    'Audio Quality': {
        fr: 'Qualité Audio',
        es: 'Qualidad de Audio',
    },
    'Subtitles': {
        fr: 'Soustitres',
        es: 'Subtitulos',
    },
    'Normal': {
        fr: 'Normale',
        es: 'Normal',
    },
    'auto': {
        fr: 'automatique',
        es: 'automático',
    },
    'off': {
        fr: 'Aucunes',
        es: 'apagado',
    },
};

export function translate(input: string) {
    if (!lang || !label_maps[input] || !label_maps[input][lang]) {
        return input;
    }
    return label_maps[input][lang];
}

