//Versio 0.5 may 2016 Vice Sallés

Infla = {
    //element is a dom class. maxH is optional and represents maxHeigt desired
    infla: function(element, maxH) {
        console.log(element);
        //Getting all given class elements
        elementsHtml = document.getElementsByClassName(element);
        console.log(elementsHtml);
        //Storing all elements within an Array
        aInflar = [].slice.call(elementsHtml);
        //console.log(aInflar);
        //For each element:
        for (i = 0; i < aInflar.length; i++) {

            console.log('An element: ' + i);
            //Getting container width
            ampladaDiv = elementsHtml.item(i).clientWidth;
            console.log('Div width: ' + ampladaDiv);

            //If the element has a text child...
            if (elementsHtml.item(i).children[0].firstChild.length) {

                //Getting text length
                llargadaText = elementsHtml.item(i).children[0].firstChild.length;
                console.log('This string has ' + llargadaText + ' characters.');

                //Calculating new font size
                midaTipo = Mates.arrodoneix(ampladaDiv / llargadaText, 0);
                console.log('We\'ll inflate this text until it gets: ' + midaTipo +' pt.');

                //If we passed a maxH paramater and the new font size is bigger than it....
                    if (midaTipo > maxH) {

                        midaTipo = maxH;
                        document.getElementsByClassName(element)[i].style.lineHeight = midaTipo + 'pt';

                    }

                document.getElementsByClassName(element)[i].style.fontSize = midaTipo + 'pt';
                document.getElementsByClassName(element)[i].style.lineHeight = midaTipo + 'pt';
            }


        }

    }



};

Mates = {

    arrodoneix: function(val, dec) { //Aquest mètode arrodoneix decimals

        //Val: Valor a arrodonir.
        //Dec: Quants decimals vols?
        return Number(Math.round(val + 'e' + dec) + 'e-' + dec);

    },
    dTres: function(tant, esA, com) { //Aquest mètode ens fa una regla de tres
        //Tant (tant) és a (esA) com (com) és a x
        var x = (esA * com) / tant;
        return x;
    }


};
