var mymap = L.map('map').setView([-26.231337, 27.919466], 9);

var markerKraal = L.marker([-26.156321, 28.083573]).addTo(mymap);
var markerMountainView = L.marker([-26.167871, 28.093867]).addTo(mymap);
var markerTolstoyFarm = L.marker([-26.363877, 27.816120]).addTo(mymap);
var markerOpDieBerg = L.marker([-26.201666, 28.069489]).addTo(mymap);
var markerChathedral = L.marker([-26.194197, 28.051233]).addTo(mymap);
var markerTemple = L.marker([-26.184810, 28.048350]).addTo(mymap);
var markerArop = L.marker([-26.201807, 28.044188]).addTo(mymap);
var markerMoosa = L.marker([-26.205216, 28.034119]).addTo(mymap);
var markerOrlando = L.marker([-26.231337, 27.919466]).addTo(mymap);

markerKraal.bindPopup('<b>The Kraal/Satyagraha House</b>').openPopup();

markerMountainView.bindPopup('<b>Mountain View</b>').openPopup();

markerTolstoyFarm.bindPopup('<b>Tolstoy Farm</b>').openPopup();

markerOpDieBerg.bindPopup('<b>Op Die Berg</b>').openPopup();	

markerChathedral.bindPopup('<b>Constantine and Helen</b>').openPopup();

markerTemple.bindPopup('<b>Temple Israel</b>').openPopup();

markerArop.bindPopup('<b>Arop House</b>').openPopup();

markerMoosa.bindPopup('<b>Moosa Hassan &amp; Co</b>').openPopup();  

markerOrlando.bindPopup('<b>Orlando</b>').openPopup();

//JOZI QUEST - CLICKING ON MAP MARKERS

markerOrlando.on("click", function (event) 
{

	hideNonOrlando();
	OrlandoRightText();

});

markerMoosa.on("click", function (event) 
{

	hideNonMoosa();
	MoosaRightText();
});

markerArop.on("click", function (event) 
{

	hideNonArop();
	AropRightText();
});

markerTemple.on("click", function (event) 
{

	hideNonTemple();
	TempleRightText();
});

markerChathedral.on("click", function (event) 
{

	hideNonConstantine();
	ConstantineRightText();
});

markerOpDieBerg.on("click", function (event) 
{

	hideNonBerg();
	BergRightText();
});


markerTolstoyFarm.on("click", function (event) 
{

	hideNonTolstoy();
	TolstoyRightText();
});

markerMountainView.on("click", function (event) 
{

	hideNonMountain();
	MountainRightText();
});

markerKraal.on("click", function (event) 
{

	hideNonSaty();
	SatyRightText();
});

L.tileLayer('https://api.mapbox.com/styles/v1/partypanda5/cjuwvc7qnfxjo1fti3v4idis7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGFydHlwYW5kYTUiLCJhIjoiY2praTU5ano3MHhkODNrbzZmNzI4cTU2ZiJ9.CVV7rMsvp9BNa-sWK-3EUQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicGFydHlwYW5kYTUiLCJhIjoiY2praTU5ano3MHhkODNrbzZmNzI4cTU2ZiJ9.CVV7rMsvp9BNa-sWK-3EUQ'
}).addTo(mymap);


function showAll(){

	 $('.lawn').show(2000);
	 $('.unbuilt').show(2000);
	 $('.font').show(2000);
	 $('.unplanned').show(2000);
	 $('.forjaz').show(2000);
	 $('.dream').show(2000);
	 $('.convolute').show(2000);
	 $('.mine').show(2000);

	 $('#link9').css('color', 'red');

	 $('#link2').css('color', 'black');
	 $('#link3').css('color', 'black');
	 $('#link4').css('color', 'black');
	 $('#link5').css('color', 'black');
	 $('#link6').css('color', 'black');
	 $('#link1').css('color', 'black');	
	 $('#link7').css('color', 'black');
	 $('#link8').css('color', 'black');

	 $('#map').hide(2000);
}


function hideNonMine(){

	 $('.lawn').hide(2000);
	 $('.unbuilt').hide(2000);
	 $('.font').hide(2000);
	 $('.unplanned').hide(2000);
	 $('.forjaz').hide(2000);
	 $('.dream').hide(2000);
	 $('.convolute').hide(2000);

	 $('.mine').show(2000);
	 $('#link1').css('color', 'red');

	 $('#link2').css('color', 'black');
	 $('#link3').css('color', 'black');
	 $('#link4').css('color', 'black');
	 $('#link5').css('color', 'black');
	 $('#link6').css('color', 'black');
	 $('#link7').css('color', 'black');
	 $('#link9').css('color', 'black');

	 $('#map').hide(2000);

}

function hideNonUnplanned(){

	 $('.lawn').hide(2000);
	 $('.unbuilt').hide(2000);
	 $('.font').hide(2000);
	 $('.mine').hide(2000);
	 $('.forjaz').hide(2000);
	 $('.dream').hide(2000);
	 $('.convolute').hide(2000);

	 $('.unplanned').show(2000);
	 $('#link2').css('color', 'red');

	 $('#link1').css('color', 'black');
	 $('#link3').css('color', 'black');
	 $('#link4').css('color', 'black');
	 $('#link5').css('color', 'black');
	 $('#link6').css('color', 'black');
	 $('#link7').css('color', 'black');
	 $('#link8').css('color', 'black');
	 $('#link9').css('color', 'black');

	 $('#map').hide(2000);


}

function hideNonConvolute(){

	 $('.lawn').hide(2000);
	 $('.unbuilt').hide(2000);
	 $('.font').hide(2000);
	 $('.mine').hide(2000);
	 $('.forjaz').hide(2000);
	 $('.dream').hide(2000);
	 $('.unplanned').hide(2000);

	 $('.convolute').show(2000);

	 $('#link3').css('color', 'red');

	 $('#link1').css('color', 'black');
	 $('#link2').css('color', 'black');
	 $('#link4').css('color', 'black');
	 $('#link5').css('color', 'black');
	 $('#link6').css('color', 'black');
	 $('#link7').css('color', 'black');
	 $('#link8').css('color', 'black');
	 $('#link9').css('color', 'black');

	 $('#map').hide(2000);


}

function hideNonDream(){

	 $('.lawn').hide(2000);
	 $('.unbuilt').hide(2000);
	 $('.font').hide(2000);
	 $('.mine').hide(2000);
	 $('.forjaz').hide(2000);
	 $('.convolute').hide(2000);
	 $('.unplanned').hide(2000);

	 $('.dream').show(2000);

	  $('#link4').css('color', 'red');

	 $('#link1').css('color', 'black');
	 $('#link2').css('color', 'black');
	 $('#link3').css('color', 'black');
	 $('#link5').css('color', 'black');
	 $('#link6').css('color', 'black');
	 $('#link7').css('color', 'black');
	 $('#link8').css('color', 'black');
	 $('#link9').css('color', 'black');

	 $('#map').hide(2000);
}

function hideNonUnbuilt(){

	 $('.lawn').hide(2000);
	 $('.convolute').hide(2000);
	 $('.font').hide(2000);
	 $('.mine').hide(2000);
	 $('.forjaz').hide(2000);
	 $('.dream').hide(2000);
	 $('.unplanned').hide(2000);

	 $('.unbuilt').show(2000);

	  $('#link5').css('color', 'red');

	 $('#link1').css('color', 'black');
	 $('#link2').css('color', 'black');
	 $('#link3').css('color', 'black');
	 $('#link4').css('color', 'black');
	 $('#link6').css('color', 'black');
	 $('#link7').css('color', 'black');
	 $('#link8').css('color', 'black');
	 $('#link9').css('color', 'black');

	 $('#map').hide(2000);


}

function hideNonLawn(){

	 $('.unbuilt').hide(2000);
	 $('.convolute').hide(2000);
	 $('.font').hide(2000);
	 $('.mine').hide(2000);
	 $('.forjaz').hide(2000);
	 $('.dream').hide(2000);
	 $('.unplanned').hide(2000);

	 $('.lawn').show(2000);

	 $('#link6').css('color', 'red');

	  $('#link1').css('color', 'black');
	 $('#link2').css('color', 'black');
	 $('#link3').css('color', 'black');
	 $('#link4').css('color', 'black');
	 $('#link5').css('color', 'black');
	 $('#link7').css('color', 'black');
	 $('#link8').css('color', 'black');
	 $('#link9').css('color', 'black');

	 $('#map').hide(2000);



}

function hideNonForjaz(){

	 $('.lawn').hide(2000);
	 $('.convolute').hide(2000);
	 $('.font').hide(2000);
	 $('.mine').hide(2000);
	 $('.unbuilt').hide(2000);
	 $('.dream').hide(2000);
	 $('.unplanned').hide(2000);

	 $('.forjaz').show(2000);

	  $('#link7').css('color', 'red');

	  $('#link1').css('color', 'black');
	 $('#link2').css('color', 'black');
	 $('#link3').css('color', 'black');
	 $('#link4').css('color', 'black');
	 $('#link5').css('color', 'black');
	 $('#link6').css('color', 'black');
	 $('#link8').css('color', 'black');
	 $('#link9').css('color', 'black');

	 $('#map').hide(2000);
}

function hideNonFonts(){

	 $('.lawn').hide(2000);
	 $('.convolute').hide(2000);
	 $('.forjaz').hide(2000);
	 $('.mine').hide(2000);
	 $('.unbuilt').hide(2000);
	 $('.dream').hide(2000);
	 $('.unplanned').hide(2000);
	 $('#testy').hide(2000);

	 $('.font').show(2000);

	  $('#link8').css('color', 'red');

	 $('#link1').css('color', 'black');
	 $('#link2').css('color', 'black');
	 $('#link3').css('color', 'black');
	 $('#link4').css('color', 'black');
	 $('#link5').css('color', 'black');
	 $('#link6').css('color', 'black');
	 $('#link7').css('color', 'black');
	 $('#link9').css('color', 'black');	

	 $('#map').css('visibility', 'visible');

	 $('#map').show();

}

//////////////////////////////////////HIDE PICTURES FROM THE MAP///////////////////////////////////////////////

function hideNonOrlando(){

	 $('.saty').hide(2000);
	 $('.mountain').hide(2000);
	 $('.tolstoy').hide(2000);
	 $('.berg').hide(2000);
	 $('.constantine').hide(2000);
	 $('.temple').hide(2000);
	 $('.arop').hide(2000);
	 $('.moosa').hide(2000);

	 $('.orlando').show(2000);

}

function OrlandoRightText (){

$('#rightSide').html('<p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px; padding-top: 5%;">ORLANDO</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">A "township" established on the outskirts of Johannesburg during the 1930s, envisaged by the apartheid state as a dormitory suburb for labourers required in Johannesburg. Famous as the hometown of celebrities such as the acclaimed scholar and writer Es’kia Mphahlele and the musician Letta Mbulu, whose Orlando home will be adorned with City of Joburg Blue Plaque on Heritage Day 23 September 2018. <br/> <br/>In the 1930s, Kallenbach and his architectural partners won an award for their Model City plan for Orlando (pic of plan taken from Satyagraha House museum display), but the plan was not implemented.<br/></p>')
}


function hideNonMoosa(){

 	 $('.saty').hide(2000);
	 $('.mountain').hide(2000);
	 $('.tolstoy').hide(2000);
	 $('.berg').hide(2000);
	 $('.constantine').hide(2000);
	 $('.temple').hide(2000);
	 $('.arop').hide(2000);
	 $('.orlando').hide(2000);

	 $('.moosa').show(2000);

}

function MoosaRightText(){

	$('#rightSide').html('<p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px; padding-top: 5%;">MOOSA HASSEN &amp; CO</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">The Moosa Hassen &amp; Co building, between Mirian Makeba and Gerard Sekoto Streets (formely 21Market Street, low rise modernist building designed by Kallenbach, inhabiting an interesting location in the city – on the edge of failed gentrification of Newtown, on what used to be Market Street but is now Albertina Sisulu. <br/> <br/> <b>IMAGES</b>: Eric Itzkin and Jill Weintroub 2018<br/></p>')
}


function hideNonArop(){

	 $('.saty').hide(2000);
	 $('.mountain').hide(2000);
	 $('.tolstoy').hide(2000);
	 $('.berg').hide(2000);
	 $('.constantine').hide(2000);
	 $('.temple').hide(2000);
	 $('.moosa').hide(2000);
	 $('.orlando').hide(2000);

	 $('.arop').show(2000);
}

function AropRightText(){

	$('#rightSide').html('<p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px; padding-top: 5%;">AROP HOUSE</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">Arop House is a building in Von Brandis &amp; Kerk Street. Construction commenced in 1931 and completed in 1932 by Hermann Kallenbach, along with his partners Kennedy and Furner. The building is characterized by balconies with steel balustrades and its name was inspired by a Union of Soviet Socialist Republics petroleum company with the same name. <br/> <br/> IMAGE: http://www.heritageregister.org.za/node/228 <br/> <br/> In the vicinity of Arop House is the much-renovated Lewis and Marks Building 63-65 President/Simmonds Street, Johannesburg. According to Clive Chipkin, this was built in 1935-1937 by Kallenbach and partners, and along with many buildings including Arop House and many in Hillbrow and surrounding inner-city suburbs, was  one of the skyscrapers that gave Hillbrow the claim to being Manhattan in Africa. <br/> <br/> REFERENCE: Clive Chipkin. 1993. Johannesburg Style, Architecture and Society, 1880s–1960s. Cape Town: David Philip.<br/><br/> https://www.artefacts.co.za/main/Buildings/bldgframes.php?bldgid=1644 <br/><br/> IMAGES: Jill Weintroub 2018 <br/></p>')
}

function hideNonTemple(){

	 $('.saty').hide(2000);
	 $('.mountain').hide(2000);
	 $('.tolstoy').hide(2000);
	 $('.berg').hide(2000);
	 $('.constantine').hide(2000);
	 $('.arop').hide(2000);
	 $('.moosa').hide(2000);
	 $('.orlando').hide(2000);

	 $('.temple').show(2000);
}

function TempleRightText(){

	$('#rightSide').html('<p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px; padding-top: 5%;">TEMPLE ISRAEL</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">The Art Deco-styled Temple Israel on the corner of Paul Nel and Claim Streets in Hillbrow, was officially opened in 1936. It was designed by the prominent architectural practice of Kallenbach, Kennedy and Furner. This was the first place of worship, or shul, to be erected to serve the newly established Progressive Reform Judaism community in South Africa. Its founding in 1936 marked the beginnings of the Progressive movement within South African Judaism. During its heyday, the Temple Israel attracted large crowds. Today, it continues to serve a congregation drawn from Hillbrow and further afield and provides premises for a pre-school for children from the surrounding neighbourhoods. The Temple has been designated for protection in terms of the South African National Heritage Resources Act (1999), in recognition of its special association with a particular spiritual, social and cultural community, and its potential to contribute information to an understanding of South Africa’s cultural heritage. [Information based on Itzkin, E. 2007. Immovable Heritage Inventory Form: Temple Israel. Department of Arts, Culture and Heritage, City of Joburg.]<br/></p>')
}

function hideNonConstantine(){

	 $('.saty').hide(2000);
	 $('.mountain').hide(2000);
	 $('.tolstoy').hide(2000);
	 $('.berg').hide(2000);
	 $('.temple').hide(2000);
	 $('.arop').hide(2000);
	 $('.moosa').hide(2000);
	 $('.orlando').hide(2000);

	 $('.constantine').show(2000);
}

function ConstantineRightText(){

$('#rightSide').html('<p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px; padding-top: 5%;">CONSTANTINE AND HELEN</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">The Cathedral of Saints Constantine and Helen, a domed, Byzantine Greek-orthodox- style church located in Wolmarans Street, Joubert Park, opened in January 1913. The classic Greek church exterior features four levels of differently angled domes. It is modelled on the Hagia Sophia in Istanbul and is the first example of a building with a pendentive dome in South Africa. It was designed by Kallenbach, who supervised its construction while living at Tolstoy Farm with Gandhi and others during the years 1910 to 1912. For many years, the congregation comprised Greek immigrants living in the surrounding neighbourhoods of Hillbrow, Berea and Yeoville, as well as from further afield on the Witwatersrand. More recently, as many members of the Greek community moved away from the inner city, the church has attracted new congregants, some being Ethiopians of the Coptic faith, who now worship together with the original congregants. The site is recognised in terms of South Africa’s National Heritage Resources Act (1999) as having ‘special heritage significance’ because of its architectural importance as well as its place as a marker of the cosmopolitan underpinnings of early Johannesburg, a feature that perpetuates in the present. [Information based on Itzkin, E. 2011. Immovable Heritage Inventory Form: Cathedral of Saints Constantine and Helen. Department of Arts, Culture and Heritage, City of Joburg.] This cathedral has a gorgeous interior (see below pic for a sense of this). The church is in regular use by the Greek community – but of course now occupying a neighbourhood completely different to the one in which it was originally built.<br/></p>')

}


function hideNonBerg(){

	 $('.saty').hide(2000);
	 $('.mountain').hide(2000);
	 $('.tolstoy').hide(2000);
	 $('.constantine').hide(2000);
	 $('.temple').hide(2000);
	 $('.arop').hide(2000);
	 $('.moosa').hide(2000);
	 $('.orlando').hide(2000);

	 $('.berg').show(2000);
}

function BergRightText(){

$('#rightSide').html('<p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px; padding-top: 5%;">OP DIE BERG</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">Dutch Reformed Church Fairview, corner Op de Bergen Streets and Corrie Streets Fairview <br/> <br/> On the corner of Op die Bergen and Corrie streets, the imposing church stands on the brow of a hill, surrounded by quiet streets lined with low-rise homes in a neighbourhood that commands a lovely view of the city centre in the distance. None of the high walls you find in the more affluent suburbs of the city – on the Sunday I visited, the spaza shop opposite was open for business and people washed cars on the side of the road while lusty singing issued from inside the church. <br/> <br/> http://www.sahra.org.za/sahris/sites/dutch-reformed-church-fairview <br/> <br/> The church was designed by Kallenbach in 1899. According to the CoJ plaque, General de la Rey laid the foundation stone in 1906 and the first service was held in 1907. <br/> <br/> IMAGES: Jill Weintroub 2018<br/></p>')
}


function hideNonTolstoy (){

	 $('.saty').hide(2000);
	 $('.mountain').hide(2000);
	 $('.berg').hide(2000);
	 $('.constantine').hide(2000);
	 $('.temple').hide(2000);
	 $('.arop').hide(2000);
	 $('.moosa').hide(2000);
	 $('.orlando').hide(2000);

	 $('.tolstoy').show(2000);
}

function TolstoyRightText(){

$('#rightSide').html('<p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px; padding-top: 5%;">TOLSTOY FARM</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">Site of communal farm from 1910 to 1913, established at Lawley, about 23km south of Johannesburg, on land owned by Kallenbach, now lies within an ‘unplanned’ (cf Murray, this site) landscape to the south of Johannesburg, surrounded by the apartheid ‘Indian’ township of Lenasia, Lawley train station, the Corobrick factory, shack lands, site of various land invasions, on porous dolomite, surrounded by the remains of now disused mines, and disintegrating farms or smallholdings, and in one case, what looks like a suburban home. <br/> <br/> Kallenbach had purchased the land and donated it to the movement – he had done the same thing with Phoenix farm in the then Natal, which was established some years earlier, in 1903. <br/> <br/> In its day, the farm was 1000 acres in extent, and planted with fruit trees. There were existing buildings, and the community built a couple more. Essentially, the farm was conceived as a place to most cost-effectively support and accommodate the families of the (mostly) men and (some) women who were being held in prison as a result of their participation in the satyagraha campaigns of resistance that were led by Kallenbach and Gandhi, and which reached their height during that period. According to Hunt & Bhana, Lelyveld and others, Gandhi was actively involved in making sure all the inhabitants followed a strict, minimalist diet in accordance with his belief in celibacy and physical and bodily self-restraint; he also ran the school for the children on the farm, again taking this opportunity to practice aspects of his philosophy of physical labour, bodily discipline, strength and forbearance, believing in the efficacy of instilling these values from a young age. <br/> <br/> It has been well recorded that Gandhi and Kallenbach eschewed reliance on modern forms of transport and would regularly walk the 23km to the city when they had business to transact there. This could be as much as three times a week, and they would typically begin the journey well ahead of sunrise. This feature of Gandhi’s sojourn at Tolstoy Farm is commemorated through the Gandhi Walk, which is held annually in Lenasia. <br/> <br/> The Tolstoy Farm land has been the site of several attempts at heritage memorialisation, and these layers can be read off the site at present. For me, the most poignant and idiosyncratic is the line of white-painted stones marking out the legend Gandhi Tolstoy Farm inscribed on the hillside behind the farm. Notwithstanding its location a short distance from one of southern Africa’s largest cities, in many ways the economic powerhouse of Africa, what remains of Tolstoy Farm retains some of its ambience of separateness and distance from the busy metropolitan heart of the city. <br/> <br/> Notes to Google maps: <br/> <br/>  Location of Tolstoy Farm (marked on maps as Lawley Farm) in relation to the city of Johannesburg and its surrounding neighbourhoods: 1. ‘Gandhi Tolstoy Farm’ marked out in painted stones and arrayed on a hill overlooking the memorial plinth and peace garden; 2. yellowish oblong mine dumps mark the layout of the gold-bearing ‘reef’ from which the Witwatersrand takes its name; 3. the proliferation of mines along its length; the residential areas and neighbourhoods surrounding the city of Johannesburg proper, showing the divide between the exclusive northern suburbs and the expanse of the south, and the line of the reef as a buffer zone between them; 4 + 5. Present dimensions of site of Tolstoy Farm in context and detail. <br/> <br/> Notes to archival images: <br/> <br/> 6. Community group image is from 1910: Free to use from Gandhiserve.com, with full caption provided: <br/> 7. Gathered in front of the plinth (Gandhiserve.org: Photographer unknown): Members of the Tolstoy Farm collective, purchased by Kallenbach and donated to the movement in 1910. Standing from right: L. Ramsamy, Ponsamy, L.M. Morgan, Venugopal Naidoo, C.K.T. Coopoo Naidoo and K. Devar. Sitting: Pragjee Desai, Rajee Naidoo, Joseph Roypen, Hermann Kallenbach, M.K. Gandhi, Mrs. P.K. Naidoo, Mrs. Lazarus, Mrs. C.K. Thambie Naidoo. Third row: Bala, Bhartasarathy, Naransamy and Puckry Naidoo (all sons of Thambie Naidoo).<br/> <br/> IMAGES: Jill Weintroub 2018<br/></p>')

}


function hideNonMountain(){

	$('.saty').hide(2000);
	 $('.tolstoy').hide(2000);
	 $('.berg').hide(2000);
	 $('.constantine').hide(2000);
	 $('.temple').hide(2000);
	 $('.arop').hide(2000);
	 $('.moosa').hide(2000);
	 $('.orlando').hide(2000);

	 $('.mountain').show(2000);
}


function MountainRightText(){

$('#rightSide').html('<p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px; padding-top: 5%;">MOUNTAIN VIEW</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">Only the stone foundation walls of Kallenbach’s luxurious residence at 5 Mountain View Drive, remain - an entirely new home has been built atop the original stone clad foundation. A small round thatched structure with plaque commemorates the spot (wild and undeveloped at that time) where Gandhi is said to have regularly returned to practice yoga and for spiritual contemplation. However, this is a reference to Ramdas, Gandhi’s third son, who returned to South Africa from India on two occasions, in 1921 and 1937. Ramdas is the Gandhi commemorated by the humble round structure on the slopes of Linksfield Ridge, as he lived with Kallenbach in 1937 while in Johannesburg to recuperate from an illness. Kallenbach built the dwelling at New Mountain Road in 1929 (Itzkin 2000, 72) - more than a decade after Gandhi and his family had left South Africa, and lived there until his death in 1945 (Dhupelia-Mesthrie 2004, 96-127). His niece Hanna Lazar and her daughter Isa, lived with Kallenbach for part of the time. <br/> <br/> One can still see the packed stone walling of Mountain View Drive and Sylvia’s Pass extension into Kallenbach Drive and the stone steps leading from the road to the site where his house once stood. <br/> <br/> With his partners in his architectural practice, Hermann Kallenbach was responsible for developing the land surrounding Linksfield Ridge into what are now the suburban neighbourhoods of Linksfield Ridge, Fairwood and Mountain View, which overlook the formerly exclusively ‘white’, now mixed and working class neighbourhoods of Orange Grove and Norwood. Kallenbach lived at various locations in over the years while developing these neighbourhoods. <br/> <br/> Between sharing The Kraal and moving to the communal Tolstoy Farm, Kallenbach and Gandhi lived at ‘The Tents’ on Linksfield Ridge (Dhupelia-Mesthrie 2004, 69; Itzkin 2000, 72). The stock image shows Gandhi (seated at right), with Hermann Kallenbach (seated left, with dog) and Manilal Gandhi, with unnamed men standing in the background, arranged near their outdoor living area complete with two bell tents located close to Mountain View. <br/> <br/> IMAGES: Jill Weintroub 2017 <br/> ARCHIVAL IMAGE: Alamay Stock <br/> <br/> References: <br/> <br/>  Dhupelia-Mesthrie, Uma. 2004. Gandhi’s Prisoner? The Life of Gandhi’s Son Manilal. Cape Town: Kwela Book <br> <br/> Itzkin, Eric. 2000. Gandhi’s Johannesburg, Birthplace of Satyagraha. Johannesburg: Wits University Press. <br/></p>')
}

function hideNonSaty(){

	 $('.mountain').hide(2000);
	 $('.tolstoy').hide(2000);
	 $('.berg').hide(2000);
	 $('.constantine').hide(2000);
	 $('.temple').hide(2000);
	 $('.arop').hide(2000);
	 $('.moosa').hide(2000);
	 $('.orlando').hide(2000);

	 $('.saty').show(2000);

}

function SatyRightText(){

$('#rightSide').html('<p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px; padding-top: 5%;">SATYAGRAHA HOUSE</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">The Kraal, designed and built by Hermann Kallenbach in 1907, occupied briefly by Gandhi and Kallenbach for less than two years from 1908 to 1909. The Kallenbach design linked together two African-inspired circular constructions or ‘rondavels’. Known in those days as The Kraal (colonial Dutch/Afrikaans term describing a livestock enclosure constructed by African farmers), the house was built by Kallenbach as an alternative to his affluent residence on Linksfield Ridge. Located in the exclusively ‘white’ suburb later known as Orchards, it was among his first built interventions in Johannesburg, a city to which he would make a considerable contribution, as both architect and property developer, in the course of his life. In his architectural practice, in particular in his partnership from 1923 until his death in 1948, he built commercial buildings, residential blocks, residences, hotels and churches in the then named Transvaal, Natal, Cape Colony and Orange Free State. Kallenbach was responsible for drawing up an award-winning plan (never implemented) for housing at Orlando East, Soweto, and also for the construction of Johannesburg’s scenic passes Munro Drive and Sylvia’s Pass (the latter he reportedly built himself with the help of some labourers). <br/> <br/> Today, Satyagraha House is a heritage site, where the buildings and location are imbued with a spirit of ascetism now made monumental, re-invented as a boutique hotel paying homage to Gandhi, with minimal décor, yet sumptuous. The house was bought in 2009 by the French travel company Voyageurs du Monde as part of a plan to invest in ‘liberation tourism’ in South Africa. After a lengthy process of renovation and heritage, design and decor consultation, the bed-and-breakfast opened in November 2011 combining luxury accommodation with ‘an on-site museum complete with Gandhi memorabilia and period pieces from India that reflect the development of Gandhi’s anti-colonial and anti-racism philosophy and his commitment to non-violence. Along with commemorating Gandhi’s contribution to satyagraha in South Africa, the museum also references Gandhi’s following of Tolstoy, an interest shared with Kallenbach, and their association with a circle of transcendental thinkers including Sonja Schlesin, Henry and Millie Pollack, and others. <br/> <br/> See https://secretaffinitiesblog.wordpress.com/places/  and  http://www.satyagrahahouse.com/ <br/> <br/> Walter Benjamin would reference the African kraal as epitomising the idea of ‘porosity’, a term he, together the actress and theatre director Asja Lācis, defined as ‘the melting away of structural and hierarchical divisions’. This was a notion that would become central to the Frankfurt School’s thinking during the 1920s (Jeffries 2016:99). The city of Naples, wrote Benjamin in a newspaper article penned in collaboration with Lācis, was like an ‘African kraal,’ a space allowing for private acts or attitudes to be ‘permeated by streams of communal life’ (Benjamin & Lascis 1978 [1937]:171; McGill 2008; Jeffries 2016:97-121, see also Benjamin 2005.). <br/> <br/> In his travels in Marseilles, Naples and Russia during the 1920s, Walter Benjamin would compare these cities to Berlin, the compartmentalised city of his childhood, a place where he felt he was living in ‘an iron cage of capitalism’. <br/> <br/> In his memoir Berlin Childhood around 1900, he would write about the barricaded suburb, where he lived in with his family – their affluence separated them securely from the sight of poverty; he writes that he did not see a single beggar during his youth. Benjamin used the term porosity as a way of talking about what he observed in the southern European city of Naples during his travels in the 1920s, describing what he saw as fluid, spontaneous, unpredictable, where spaces allowed for public and private life to be ‘thrillingly intermingled’; these were places where, for Benjamin, the possibility of transcending barriers of class arose. <br/> <br/> The notion of interpenetrability or porosity  was something Benjamin returned to again and again in his work – the arcades of Paris, already in ruins by the time he wrote about them in the 1920s and 1930s, had, when they were constructed nearly 100 years before, ushered in a new social life of commodification, and capitalism, and the beginnings of a separation between private and public life. In this project, my intention is to revisit these spatial ideas inaugurated by Benjamin, and to think about the idea of porosity in relation to social and political spaces of the present, with particular reference to the Kallenbach sites curated for JOZIQUEST. <br/> <br/> REFERENCES: <br/> <br/> Andrew Benjamin. 2005. Porosity At The Edge. Architectural Theory Review, 10:1, 33-43. <br/> Walter Benjamin. 1968 [1950]. Theses on the Philosophy of History. In H. Arendt (ed.), IIluminations. New York: Schocken Books, 253–264. <br/> Walter Benjamin. 1999 [1982]. The Arcades Project. Transl. by H. Eiland & K. McLaughlin. Cambridge, MA: The Belknap Press. <br/> Walter Benjamin & Asja Lācis. 1978 [1937]. ‘Naples’. In P. Demetz (ed.), Reflections: Essays, Aphorisms, Autobiographical Writings. New York: Harcourt Brace Jovanovich. <br/> Clive Chipkin. 1993. Johannesburg Style, Architecture and Society, 1880s–1960s. Cape Town: David Philip. <br/> ity of Joburg. 2009. Gandhi’s House Is Up for Sale. https://joburg.org.za/index.php?option=com_content&task=view&id=4177&Itemid=266 <br/> Ramachandra Guha. 2013. Gandhi’s Master Biographer Uncovers an Unlikely Friendship with an English Couple. Independent. www.independent.co.uk/news/world/asia/gandhis-master-biographer-uncovers-an-unlikely-friendship-with-anenglish-couple-8899764.html. <br/> James Hunt & Surendra Bhana. 2013. Spiritual Rope-Walkers: Gandhi, Kallenbach, and the Tolstoy Farm, 1910–13. South African Historical Journal, 58:1, 174–20 <br/> Eric Itzkin. 2000. Gandhi’s Johannesburg, Birthplace of Satyagraha. Johannesburg: Wits University Press. <br/> Stuart Jeffries. 2016. Grand Hotel Abyss, The Lives of the Frankfurt School. London: Verso. <br/> Joseph Lelyveld. 2011. Great Soul: Mahatma Gandhi and his Struggle with India. New York: Knopf. <br/> Shimon Lev. 2012. Soulmates: The Story of Mahatma Gandhi and Hermann Kallenbach. Hyderabad: Orient Blackswan. <br/> Shimon Lev. 2012. Soulmates: The Story of Mahatma Gandhi and Hermann Kallenbach. Hyderabad: Orient Blackswan. <br/> Justine McGill. 2008. The Porous Coupling of Walter Benjamin and Asja Lācis. Angelaki, 13:2, 59–72 <br/> George Paxton. Sonja Schlesin: Gandhi’s South African Secretary. Glasgow: Pax. <br/><br/> IMAGES: Jill Weintroub / Manuel Zublena <br/> <br/> ARCHIVAL IMAGE: Satyagraha House<br/></p>')
}









$('#link1').click(function() {
  $('#rightSide').html('<p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px; padding-top: 5%;">ARCHIVES OF SPACE</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">A point of departure for this project raises questions about the nature, form and construction of thearchives of space. This occurs directly through interrogating the in-depth engagement that with theconstruction, collection and assimilation of the Modern Architecture Documentation Project papershoused in the Architectural Collections in the University of Cape Town Library’s Department ofManuscripts and Archives. It also occurs more indirectly through engaging a set of questions aboutthe notion of the archive. Speaking at a seminar entitled <i>Archive Fever in South African</i> at theUniversity of the Witwatersrand in Johannesburg in 1998, at which Jacques Derrida was present - Suevan Zyl’s opening remarks to her talk entitled <i>Psychoanalysis and the Archive: Derrida’s ArchiveFever</i> reminds us: <br/><br/></p><p class="margin-80 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">If the concept of archive ever was an untroubled one, it certainly is no longer so. Postmodernismand deconstruction have made sure of that. What the archive is, how it works and in which waysit may be reconfigured are all questions that the elaborate, intertextual thought of our timestackles with characteristic self-consciousness and often unashamed opacity. <sup>1</sup> <br/><br/></p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">Commenting more practically on the shift in the methodological use of the archive in contemporaryscholarship, Carolyn Hamilton, Verne Harris and Graeme Reid, writing in the Introduction to‘Refiguring the Archive’, explain the influence of the Foucauldian insights contained in <i>Archaeologyof Knowledge and Discourse on Language </i>. ‘Michel Foucault’s engagement with archive is not simplyinstitution, but rather the law of what can be said, the systems of statements, or rules of practice, thatgive shape to what can and cannot be said and that archives are often both documents of exclusionand monuments to particular configurations of power’.<sup>2</sup> They explain: </p><p class="margin-80 nomargin-bottom displayFontMatrix margin-top-20" style="font-size: 15px; line-height: 14px;">Historians and other scholars are increasingly concerned to understand how knowledge of thepast is produced. Where previously historians ‘mined’ the archives for ‘nuggets’ of fact in amanner conscious of problems of bias in the record, today scholars pay greater attention to theparticular processes by which the record was produced and subsequently shaped, both beforeand after its entry into the archive, and increasingly as part of the archival record.<sup>3</sup> <br/><br/></p> <p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">Why then is it a good idea to look at archives as part of scholarship in the spatial disciplines? Onereason is that unlike in many studies of buildings and spaces where the emphasis of writing is on thefinished product, considering archives of the producers of space gives insight into the unfinishedprocesses in the making of space. Exploring these processes, as the authors above remind us, allowsfor an understanding of how built projects get situated in society. This necessarily has to do withlabour, the work of production. Through tracing what happens in a building project, rather than simply observing it in its concrete realisation, the space is opened up for speculation about the intellectual contours of projects, from idea to built form. In this way scholarship in and of the builtenvironment disciplines may be seen in a process of becoming a form of social history and not justappreciated in abstraction for its visual and spatial attributes. This a major point made by Michel DeCerteau between the material and the conceptual in his essay <i>Walking the City </i>. <sup>4</sup> One might say that inthis approach the material is forced up against the conceptual and the architectural idea is forced upagainst social realities. As argued elsewhere previously, in most local scholarship in the spatialdisciplines and in particular the study of architects by architects the effects of apartheid are ignored.5Such work takes architecture out of history except perhaps for a narrow, self-referential history of thediscipline. This project argues that there is not a clear divide between the history of architecture andhistory of society, and that while architects, planners and urban designers clearly intervene in spatialenvironments, they are also removed. </p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px; text-indent: 30px;">The particular components contained in the archives of architectural practices include recordscontained in what is often referred to as the ‘Job Files’ for each project. Of all the items – somestandard to these archives and others more miscellaneous and personal – the job files enable theconstruction of a reading of how plans intersect with the archives. Architectural collections typicallyare focussed on the individual and follow the structure of the chronology of a life in practice, in whichthe remnants of built projects are collated alongside often quite ephemeral bits and pieces of thearchitects’ life interests. <sup>6</sup> To a large extent architectural archives are limited as they contain materialof a technocratic nature (technical specifications, working drawings, job files and details of buildingcontracts etc) and interpretation of these knowledge bases are restricted by disciplinary methods ofwriting. </p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px; text-indent: 30px;">In contrast to the prevailing trends, in much architectural writing where there is anassumption that ‘buildings speak’ through their finished plans and built structures, the methodologicalbasis of this thesis has been that of attempting to ‘write differently’ about the producers and productsof space making through a close engagement with archive. Here the constituent components ofarchive like the ‘job file’ move from the evidentiary space of fact into a conceptual space as they givecontent to the ‘invisible’ work of production. </p> <br/> <br/><hr style="width: 380px;"> <br/><p class="margin-50 displayFontMatrix margin-top-10" style="font-size: 15px; font-weight: 800; line-height: 14px;"><sup>1</sup> Van Zyl, Sue, 2002, ‘Psychoanalysis and the <i>Archive</i>: Derrida’s Archive Fever’, in Hamilton, Caroline; Harris, Verne; Taylor, Jane; Reid, Graeme and Saleh, Razia, (eds) <i>Refiguring the Archive</i>, David Phillip, Cape Town, pp 39-60 <br/><sup>2</sup> Hamilton, Caroline; Harris, Verne; Taylor, Jane; Reid, Graeme and Saleh, Razia, (eds) 2002 ‘Introduction’ in <i>Refiguring the Archive</i>, David Phillip, Cape Town, pp. 7-18 3 Hamilton et al, 2002: 9 <br/><sup>3</sup> Hamilton <i>et al</i>, 2002: 9 <br/><sup>4</sup> De Certeau, Michel (translated by Steven Rendall), 1984, ‘Walking in the City’ Chapter VII in <i>The Practice of Everyday Life</i>, University of California Press, Berkley, Los Angeles, London, pp. 91-110 <br/><sup>5</sup> Murray, N, 2006. ‘Reframing the “contemporary”, architecture and the postcolony’ in Deckler, T., Graupner, A. and Rasmuss, H. (eds) <i>Contemporary Architecture in a Landscape of Transition</i>, Double Storey, Cape Town, pp. 4–8 <br/><sup>6</sup> Hart, 2003:1-9<br/></p>')
});

$('#link2').click(function() {
  $('#rightSide').html('<h4 class="rightText">This is a Title for Unplanned</h4><br><br><h4 class="rightText nomargin nopadding">A Name of a Thing for Unplanned</h4><h4 class="rightText nopadding margin-top-6">Another Title Here for Unplanned</h4><div class="horizontalLine"></div><p class="margin-20">Lorem ipsum dolor sit amet,sanctus nominati senserit id sit,an sit diam inermis conclusionemque.Nisl dicat doctus qui ut,quis adipisci hendrerit ad qui.Eius solet albucius sea eu,eos graecis sensibus scribentur ut,ex lobortis mandamus sed.Mea elitr senserit id,ex wisi mazim lucilius cum,ad tantas quodsi inermis duo.Ea nam detracto explicari,et eos vide efficiendi dissentiet,eruditi repudiandae vis ad.Ea autem omnium expetendis per,his sale iudicabit ut,case natum senserit ei pro.Alia tempor invenire nam ad,ea cum habemus docendi efficiendi.Homero volumus mel eu.Option molestiae vel cu,nibh timeam fabulas per at,sea errem delicata pericula ei.Ne facete omnium est,per odio omnesque comprehensam no,ius eripuit admodum definiebas ad.Id sea placerat torquatos,cum ei qualisque sadipscing.Cibo aperiam in his.Nulla commodo prodesset cu mei.Ad veri graeci pri,fabellas liberavisse comprehensam his eu.Has fugit torquatos in,vim dolore sententiae ne.Cu per falli aperiam,ut per nisl inani elitr.Graeci apeirian signiferumque usu ne,quot nostrud sententiae eu eos,iusto prompta recteque est ei.Et dicam ignota vituperata sed.In est elitr omittantur,zril volumus duo ei.Pro in dictas fabellas.Stet iuvaret no per,sit oportere prodesset ex.</p>');
});

$('#link3').click(function() {
  $('#rightSide').html('<h4 class="rightText">This is a Title for Convolute a</h4><br><br><h4 class="rightText nomargin nopadding">A Name of a Thing for Convolute a</h4><h4 class="rightText nopadding margin-top-6">Another Title Here for Convolute a</h4><div class="horizontalLine"></div><p class="margin-20">Lorem ipsum dolor sit amet,sanctus nominati senserit id sit,an sit diam inermis conclusionemque.Nisl dicat doctus qui ut,quis adipisci hendrerit ad qui.Eius solet albucius sea eu,eos graecis sensibus scribentur ut,ex lobortis mandamus sed.Mea elitr senserit id,ex wisi mazim lucilius cum,ad tantas quodsi inermis duo.Ea nam detracto explicari,et eos vide efficiendi dissentiet,eruditi repudiandae vis ad.Ea autem omnium expetendis per,his sale iudicabit ut,case natum senserit ei pro.Alia tempor invenire nam ad,ea cum habemus docendi efficiendi.Homero volumus mel eu.Option molestiae vel cu,nibh timeam fabulas per at,sea errem delicata pericula ei.Ne facete omnium est,per odio omnesque comprehensam no,ius eripuit admodum definiebas ad.Id sea placerat torquatos,cum ei qualisque sadipscing.Cibo aperiam in his.Nulla commodo prodesset cu mei.Ad veri graeci pri,fabellas liberavisse comprehensam his eu.Has fugit torquatos in,vim dolore sententiae ne.Cu per falli aperiam,ut per nisl inani elitr.Graeci apeirian signiferumque usu ne,quot nostrud sententiae eu eos,iusto prompta recteque est ei.Et dicam ignota vituperata sed.In est elitr omittantur,zril volumus duo ei.Pro in dictas fabellas.Stet iuvaret no per,sit oportere prodesset ex.</p>');
});

$('#link4').click(function() {
  $('#rightSide').html('<h4 class="rightText">This is a Title for Dream Map</h4><br><br><h4 class="rightText nomargin nopadding">A Name of a Thing for Dream Map</h4><h4 class="rightText nopadding margin-top-6">Another Title Here for Dream Map</h4><div class="horizontalLine"></div><p class="margin-20">Lorem ipsum dolor sit amet,sanctus nominati senserit id sit,an sit diam inermis conclusionemque.Nisl dicat doctus qui ut,quis adipisci hendrerit ad qui.Eius solet albucius sea eu,eos graecis sensibus scribentur ut,ex lobortis mandamus sed.Mea elitr senserit id,ex wisi mazim lucilius cum,ad tantas quodsi inermis duo.Ea nam detracto explicari,et eos vide efficiendi dissentiet,eruditi repudiandae vis ad.Ea autem omnium expetendis per,his sale iudicabit ut,case natum senserit ei pro.Alia tempor invenire nam ad,ea cum habemus docendi efficiendi.Homero volumus mel eu.Option molestiae vel cu,nibh timeam fabulas per at,sea errem delicata pericula ei.Ne facete omnium est,per odio omnesque comprehensam no,ius eripuit admodum definiebas ad.Id sea placerat torquatos,cum ei qualisque sadipscing.Cibo aperiam in his.Nulla commodo prodesset cu mei.Ad veri graeci pri,fabellas liberavisse comprehensam his eu.Has fugit torquatos in,vim dolore sententiae ne.Cu per falli aperiam,ut per nisl inani elitr.Graeci apeirian signiferumque usu ne,quot nostrud sententiae eu eos,iusto prompta recteque est ei.Et dicam ignota vituperata sed.In est elitr omittantur,zril volumus duo ei.Pro in dictas fabellas.Stet iuvaret no per,sit oportere prodesset ex.</p>');
});

$('#link5').click(function() {
  $('#rightSide').html('<h4 class="rightText">This is a Title for Unbuilt</h4><br><br><h4 class="rightText nomargin nopadding">A Name of a Thing for Unbuilt</h4><h4 class="rightText nopadding margin-top-6">Another Title Here for Unbuilt</h4><div class="horizontalLine"></div><p class="margin-20">Lorem ipsum dolor sit amet,sanctus nominati senserit id sit,an sit diam inermis conclusionemque.Nisl dicat doctus qui ut,quis adipisci hendrerit ad qui.Eius solet albucius sea eu,eos graecis sensibus scribentur ut,ex lobortis mandamus sed.Mea elitr senserit id,ex wisi mazim lucilius cum,ad tantas quodsi inermis duo.Ea nam detracto explicari,et eos vide efficiendi dissentiet,eruditi repudiandae vis ad.Ea autem omnium expetendis per,his sale iudicabit ut,case natum senserit ei pro.Alia tempor invenire nam ad,ea cum habemus docendi efficiendi.Homero volumus mel eu.Option molestiae vel cu,nibh timeam fabulas per at,sea errem delicata pericula ei.Ne facete omnium est,per odio omnesque comprehensam no,ius eripuit admodum definiebas ad.Id sea placerat torquatos,cum ei qualisque sadipscing.Cibo aperiam in his.Nulla commodo prodesset cu mei.Ad veri graeci pri,fabellas liberavisse comprehensam his eu.Has fugit torquatos in,vim dolore sententiae ne.Cu per falli aperiam,ut per nisl inani elitr.Graeci apeirian signiferumque usu ne,quot nostrud sententiae eu eos,iusto prompta recteque est ei.Et dicam ignota vituperata sed.In est elitr omittantur,zril volumus duo ei.Pro in dictas fabellas.Stet iuvaret no per,sit oportere prodesset ex.</p>');
});

$('#link6').click(function() {
  $('#rightSide').html('<h4 class="rightText">This is a Title for Lawn</h4><br><br><h4 class="rightText nomargin nopadding">A Name of a Thing for Lawn</h4><h4 class="rightText nopadding margin-top-6">Another Title Here for Lawn</h4><div class="horizontalLine"></div><p class="margin-20">Lorem ipsum dolor sit amet,sanctus nominati senserit id sit,an sit diam inermis conclusionemque.Nisl dicat doctus qui ut,quis adipisci hendrerit ad qui.Eius solet albucius sea eu,eos graecis sensibus scribentur ut,ex lobortis mandamus sed.Mea elitr senserit id,ex wisi mazim lucilius cum,ad tantas quodsi inermis duo.Ea nam detracto explicari,et eos vide efficiendi dissentiet,eruditi repudiandae vis ad.Ea autem omnium expetendis per,his sale iudicabit ut,case natum senserit ei pro.Alia tempor invenire nam ad,ea cum habemus docendi efficiendi.Homero volumus mel eu.Option molestiae vel cu,nibh timeam fabulas per at,sea errem delicata pericula ei.Ne facete omnium est,per odio omnesque comprehensam no,ius eripuit admodum definiebas ad.Id sea placerat torquatos,cum ei qualisque sadipscing.Cibo aperiam in his.Nulla commodo prodesset cu mei.Ad veri graeci pri,fabellas liberavisse comprehensam his eu.Has fugit torquatos in,vim dolore sententiae ne.Cu per falli aperiam,ut per nisl inani elitr.Graeci apeirian signiferumque usu ne,quot nostrud sententiae eu eos,iusto prompta recteque est ei.Et dicam ignota vituperata sed.In est elitr omittantur,zril volumus duo ei.Pro in dictas fabellas.Stet iuvaret no per,sit oportere prodesset ex.</p>');
});

$('#link7').click(function() {
  $('#rightSide').html('<h4 class="rightText displayFontMatrix" style="text-align: left; margin-left: 20px; font-size: 20px; margin-top: 12px; ">Joze Forjaz, architect</h4> <br/><br/><br/><br/><p class="margin-20 displayFontMatrix" style="font-size: 15px; line-height: 14px;">I believe architecture has very little meaning as an isolated object and I believe this is the dimension that we, at best, are obtaining. I believe that we will not achieve real liveable urban environments until we have the courage to understand the deep social and cultural contrasts within our society and until we acknowledge them and try to find ways to express them and in some cases, resolve them" (Forjaz, 1991). [1] Interview with Joze Forjaz [date] quote re politics and RMP XXXXXXXX Joze Forjaz’s office in Maputo [date] Reports on the Rand Mines Properties ProjectXXXX Sitting on the shelves of Forjaz’s office in Maputo [name of building] were the set of reports by the consultants for Rand Mines by Roelof Uytenbogaardt and Ivor Prinsloo, [name them and link to them]. Interview on architecture: cite lectures as manifesto of his thinking Quote on Pancho: ideology / Maputo ‘Amancio (Pancho) Guedes, was born in Portugal and educated in Maputo (formerly Lourenco Marques), Mozambique. His "phenomenal output of exuberant work was deeply personal - sculptural, decorated, full of wit acted as stimulant and irritant to a dry Southern African profession" (Cooke, 1985, p.61). He graduated from Witwatersrand in 1950 and set up practice working mostly in Maputo until he returned to Johannesburg as Head of Department at Wits in 1975. The examples of his creative genius are too numerous to mention here, however the Sagrada Familia Church at Machava, the Saipal Bakery in Maputo and finally the "Smiling Lion" Apartment Building, stand out as masterpieces.’[1] Sanders, Paul S. (2000) ‘Defining a relevant architecture in South Africa’. arq: Architectural Research Quarterly 4(1):pp. 67-80.</p>');
});

$('#link8').click(function() {
  $('#rightSide').html('<p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px; padding-top: 5%;">JOZIQUEST</p><p class="margin-80 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">… ‘holistic research’ to be addressed to the ‘daunting policy challenges’ facing administrators in theface of seemingly ‘incomensurable’ challenges facing contemporary cities … <br/><br/></p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">Johannesburg, city of hybrid modernities, arguably the ‘African capital of the twenty-first century’… after Walter Benjamin’s ‘Paris, the capital of the Nineteenth Century’.<br/><br/></p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">This excavation of Johannesburg is inspired by Das Passagen-Werk, Walter Benjamin’s unfinished reflection on modernity and history, in the spirit of facilitating creative cross-disciplinary understandings of space and urbanisms in relation to heritage, architecture and public history, associated with cities and the urban present. <br/><br/></p> <p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">JOZIQUEST, the name I have given to a project aimed at <b>creatively and expressively</b> unwrapping and revealing the complex and layered <b>nature of space </b>in <b>urban Johannesburg</b>. This is a pilot project, situated within the <b>emerging disciplinary space</b> offered by the Digital Humanities, in which the goal is to establish an online website that will be aimed at <b>practitioners working in the formal spatial and planning contexts</b>, as well as <b>scholars across the humanities</b>.<br/><br/></p> <p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">In this first phase of the project, I invite you to explore <b>nine sites</b> associated with the architect <b>Hermann Kallenbach</b>, each offered as means of <b>approaching spatial complexity</b> in Johannesburg.</b>.<br/><br/></p> <p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">As has been well established in scholarship in the spatial humanities (Edensor and Jayne 2011; Murray 2008, 2011; Nuttall and Mbembe 2008; Simone 2008, 2011), <b>cities are complex and dynamic</b> organisms that demand <b>multi-layered research methods and innovative data gathering techniques</b> to cross disciplinary boundaries in order to yield knowledge that can be effective in urban planning and redevelopment. The urban fabric of the city of Johannesburg, if viewed through a range of disciplinary lenses from <b>historical, to artistic, to ethnographic</b>, can provide salient data as to the social, spatial, cultural, and psychological impacts of change pre- and post-dating the political transformation of 1994, data that has bearing on urban planning in the present and future. Following Benjamin’s Arcades Project, the primary goal of this project is to <b>assemble a knowledge bank of cultural, historical, and humanistic material</b>, which is aimed at thickening scientific data produced through formal urban research, and that can activate cultural memory and spatial history as part of renewal and planning projects.</b>.<br/><br/></p> <p class="margin-80 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;"><i>A world of secret affinities opens up within: palm tree and feather duster, hairdryer and Venus de Milo, prostheses and letter-writing manuals. The odalisque lies in wait next to theinkwell, and priestesses raise high the vessels into which we drop cigarette buttsas incense offerings. [Walter Benjamin 1999. From Convolute R ‘MIRRORS’, 540 of the Belknap edition of The Arcades Project. Transl Eiland &amp; Mclaughlin.]A world of secret affinities: palm tree and feather duster, hair dryer and Venus de Milo, prosthesis and letter-writing manual come together here as after a long separation. [Walter Benjamin 1999. ‘The Arcades of Paris’, 874 of the Belknap edition of The Arcades Project. Transl Eiland &amp; Mclaughlin.</i><br/><br/></p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">From a series of untitled texts on loose sheets of paper, dated to 1928 9r 1929, most likely the beginnings of the essay Paris Arcades: A Dialectical Fairyland, originally planned by Benjamin, now rearranged by translators Howard Eiland and Keneth McLaughlin for the Belknap edition of 1999, in whose arrangement the first of the articles opens with an excerpt Benjamin culled from the Illustrated Guide to Paris:</b>.<br/><br/></p><p class="margin-80 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;"><i>"In speaking of the inner boulevards"; says the Illustrated Guide to Paris, a completepicture of the city on the Seine and its environs from the year 1852, "wehave made mention again and again of the arcades which open onto them. Thesearcades, a recent invention of industrial luxury, are glass-roofed, marble-panelledcorridors extending through whole blocks of buildings, whose owners havejoined together for such enterprises. Lining both sides of these corridors, whichget their light from above, are the most elegant shops, so that the arcade is a city,a world in miniature, in which customers will find everything they need.”</i><br/><br/></p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">See full LiC JOZIQUEST proposal at: </br>https://www.academia.edu/37091964/LIFE_IN_THE_CITY_Wits_School_of_Governance </br></br>See also https://secretaffinitiesblog.wordpress.com/<br/><br/></br></p><hr style="width: 380px;"> <br/><p class="margin-50 displayFontMatrix margin-top-10" style="font-size: 15px; font-weight: 800; line-height: 14px;">Walter Benjamin. 1999. The Arcades Project. Transl. Howard Eiland &amp; Kevin McLaughlin. Cambridge, MA.: The Belknap Press at Harvard University Press. </br>Tim Edensor &amp; Mark Jayne, editors. 2011. Urban Theory Beyond the West. London and New York: Routledge.</br>Martin Murray. 2008. Taming the Disorderly City: The Spatial Landscape of Johannesburg after Apartheid. Ithaca and London: Cornell University Press. </br>Martin Murray. 2011. City of Extremes: The Spatial Politics of Johannesburg. Durham, NC: Duke University Press. </br>Sarah Nuttall &amp; Achille Mbembe. 2008. Johannesburg, The Elusive Metropolis. Johannesburg: Wits University Press. </br>AbdouMaliq Simone. 2008. People as Infrastructure: Intersecting fragments in Johannesburg. In Sarah Nuttall and Achille Mbembe, editors. Johannesburg, The Elusive Metropolis, 68-90. Johannesburg: Wits University Press. </br>AbdouMaliq Simone. 2011. No longer the Subaltern: Refiguring cities in the Global South. In Tim Edensor and Mark Jayne, editors. Urban Theory Beyond the West, 31-46. London and New York: Routledge.</p><p class="margin-50 displayFontMatrix margin-top-10" style="font-size: 15px; font-weight: 800; line-height: 14px;"><b>Acknowledgements:</b></br></br>For their generosity and engagement at many and various points throughout this research journey, I am indebted to: </br>Noëleen Murray</br>Eric Itzkin</br>Melissa Myambo</br>Jonathan Cane &amp; Andrea Hayes</br></br>JOZIQUEST is a project by Jill Weintroub, Life in the City Postdoctoral Fellow at the Wits City InstituteThe Life in the City Programme is located in the School of Governance, University of the Witwatersrand.</br>Images: Jill Weintroub</br>Tracings: Noëleen Murray</p>');
});

$('#link9').click(function() {
  $('#rightSide').html('<img id="logoSouth" style="padding-top: 15%;" class="margin-left-50" src="assets/images/Logo.png"><p class="displayFont margin-50 nomargin-bottom" style="font-size: 15px;">IDEA</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">SOUTH, the first in a series of 4 creative works around co-ordinated themes of imagined and real space in Johannesburg, South Africa, with contributions from artists, architects and authors. The series is envisaged as a way to think about the many Joburgs/Jozi’s/Egoli’s we inhabit. Crossing the city, the four works SOUTH, EAST, WEST and NORTH, will consider the productive spaces coalesced around a series of themes arising out of the core project out of which this series has emerged, the Rand Mines Properties Project from the 1970s. Constructed around a ‘Dream Map’, the project envisaged a radical modernist scheme for the redevelopment of ‘out mined’ land to the geographical South of the city. Concerned with filling what was treated as an empty space or ‘blank’ on the landscape, the interdisciplinary team of architects, photographers, landscape architects and planners imagined a future curiously shaped around ideas of newness in a space they called ‘The New South’. This imaginary vision was against the ideas of the time of apartheid’s buffer zones of segregation, mining, township (Soweto – the South Western township), and the white city of progress and modernity. <br/><br/></p><p class="displayFont margin-50 nomargin-bottom margin-top-10" style="font-size: 15px;">SOUTH</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">In thinking with / through / alongside/ against / and anew (sic), the creative research proposed for the SOUTH project seeks imaginative responses to the making and unmaking of the idea of City of Gold, across a range of possible genres – from photography to fiction, print making to mark making in the landscape, rethinking pasts and futures. If as is so often the case scientific and professional knowledges shape the intellectual landscape of Urban Studies in South Africa, this project hopes to privilege the creative, the imaginative, the unreal and locate performative aspects of the ‘urban humanities’ around the following themes: blank, unplanned, unbuilt, unJoburg (after China Miéville’s fictional ‘unLun Dun’), land/scape, Dream Map and JoziQuest. <br/><br/></p><p class="displayFont margin-50 nomargin-bottom margin-top-10" style="font-size: 15px;">METHODS AND SOURCES</p><p class="margin-50 nomargin-bottom displayFontMatrix margin-top-10" style="font-size: 15px; line-height: 14px;">The co-ordinate map above draws reference to the blank_Architecture, apartheid and after project’s ‘grid’ of thematic concepts that were used to develop a non-linear, non-temporal, non-biographic (great men, great works, great lives) and a-political ways in which histories of architecture, planning, urban design and landscape architecture are traditionally formulated. Our co-ordinate mapping is a loose set of relational positions adduced to thinking about the ways in which the city has come to have distinct co-ordinate identities – according value around social status, race, class and political ecologies of the city and its ‘world below’. <br/><br/>SOUTH is a project that also draws on Walter Benjamin’s ideas from The Arcades Project of the ‘convolute’ – envelopes of collected archival associations and fragments of life in the city of Paris. Similarly, the digital archive of the SOUTH uses this method to assemble its sources, reflections, documents and notes. <br/><br/></p><p class="margin-50 displayFontMatrix margin-top-10" style="font-size: 15px; font-weight: 800; line-height: 14px;">SOUTH is a curated project by Jonathan Cane, Noëleen Murray and Dorothee Kreutzfeldt.</p>');
});




// Get the modal
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var modalConvoluteHeading = document.getElementById("convoluteHeading");
var modalImgHeading = document.getElementById("imgHeading");
var modalImgAbout = document.getElementById("aboutImage");

if (modalConvoluteHeading != null)
{
	console.log(modalConvoluteHeading);
}

var noOfImages = 12;
var imageArray = new Array(noOfImages);

for (var c = 0; c < noOfImages; c++)
{
	imageArray[c] = new Array(5);
}

imageArray[0][0] = "assets/images/Typography/DSC_2018.JPG";
imageArray[0][1] = "My Lovely Heading";
imageArray[0][2] = "My Awesome Convolute Heading";
imageArray[0][3] = "This is my about section. look at it go.";
imageArray[0][4] = "assets/placeholder.pdf";

imageArray[1][0] = "imageSource";
imageArray[1][1] = "imageHeading";
imageArray[1][2] = "convoluteHeading";
imageArray[1][3] = "about";
imageArray[1][4] = "pdfSource";

imageArray[2][0] = "imageSource";
imageArray[2][1] = "imageHeading";
imageArray[2][2] = "convoluteHeading";
imageArray[2][3] = "about";
imageArray[2][4] = "pdfSource";

imageArray[3][0] = "imageSource";
imageArray[3][1] = "imageHeading";
imageArray[3][2] = "convoluteHeading";
imageArray[3][3] = "about";
imageArray[3][4] = "pdfSource";

imageArray[4][0] = "imageSource";
imageArray[4][1] = "imageHeading";
imageArray[4][2] = "convoluteHeading";
imageArray[4][3] = "about";
imageArray[4][4] = "pdfSource";

imageArray[5][0] = "imageSource";
imageArray[5][1] = "imageHeading";
imageArray[5][2] = "convoluteHeading";
imageArray[5][3] = "about";
imageArray[5][4] = "pdfSource";

imageArray[6][0] = "imageSource";
imageArray[6][1] = "imageHeading";
imageArray[6][2] = "convoluteHeading";
imageArray[6][3] = "about";
imageArray[6][4] = "pdfSource";

imageArray[7][0] = "imageSource";
imageArray[7][1] = "imageHeading";
imageArray[7][2] = "convoluteHeading";
imageArray[7][3] = "about";
imageArray[7][4] = "pdfSource";

imageArray[8][0] = "imageSource";
imageArray[8][1] = "imageHeading";
imageArray[8][2] = "convoluteHeading";
imageArray[8][3] = "about";
imageArray[8][4] = "pdfSource";

imageArray[9][0] = "imageSource";
imageArray[9][1] = "imageHeading";
imageArray[9][2] = "convoluteHeading";
imageArray[9][3] = "about";
imageArray[9][4] = "pdfSource";

imageArray[10][0] = "imageSource";
imageArray[10][1] = "imageHeading";
imageArray[10][2] = "convoluteHeading";
imageArray[10][3] = "about";
imageArray[10][4] = "pdfSource";

imageArray[11][0] = "imageSource";
imageArray[11][1] = "imageHeading";
imageArray[11][2] = "convoluteHeading";
imageArray[11][3] = "about";
imageArray[11][4] = "pdfSource";

var imgIndex;

function displayImg(id){
	
	imgIndex = id;

    modal.style.display = "block";
    modalImg.src = imageArray[id][0];
    modalImgHeading.innerHTML = imageArray[id][1];
    modalConvoluteHeading.innerHTML = imageArray[id][2];
    modalImgAbout.innerHTML = imageArray[id][3];
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

function openInNewTab(){

	var win = window.open (imageArray[imgIndex][0], '_blank');
	win.focus();
}

function openInNewTabPDF(){

	var win = window.open (imageArray[imgIndex][4], '_blank');
	win.focus();
}


