sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'interactionitems/test/integration/FirstJourney',
		'interactionitems/test/integration/pages/Interactions_HeaderList',
		'interactionitems/test/integration/pages/Interactions_HeaderObjectPage'
    ],
    function(JourneyRunner, opaJourney, Interactions_HeaderList, Interactions_HeaderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('interactionitems') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheInteractions_HeaderList: Interactions_HeaderList,
					onTheInteractions_HeaderObjectPage: Interactions_HeaderObjectPage
                }
            },
            opaJourney.run
        );
    }
);