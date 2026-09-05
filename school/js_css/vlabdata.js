var data = {
            assignment: assignment,
            configuration: configuration,
            solutions: solutions,
            species: species,
            reactions: reactions,
            spectra: spectra
        };

        const language = 'en';
        const allowLoadAssignment = false;
        const showFirstTimeTips = false;
        const appModel = new VLab.AppModel();
        const appView = new VLab.AppView({
            model: appModel,
            el: document.getElementById("vlab"),
            vlab: data,
            domain: "https://chemcollective.org/chem/jsvlab/"
        })
