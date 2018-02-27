var facts = [];
facts[0] = "<a href='https://en.wikipedia.org/wiki/Ytterby'>Ytterby</a> \
            Many rare earth elements were discovered in the mineral gadolinite \
            near <a href='https://en.wikipedia.org/wiki/Ytterby'>Ytterby</a>, \
            which eventually proved to be the source of four new elements that \
            were named after the mineral ore and the area. These elements are \
            yttrium (Y), erbium (Er), terbium (Tb), and ytterbium (Yb) and were \
            first described in 1794, 1842, 1842, and 1878, respectively";
facts[1] = "Current definition of a \
            <a href='https://physics.nist.gov/cuu/Units/second.html'>second</a> \
            was first introduced in 1967 and later affirmed in 1997:<br> \
            The second is the duration of 9 192 631 770 periods of the radiation \
            corresponding to the transition between the two hyperfine levels of \
            the ground state of the caesium 133 atom in its ground state at a \
            temperature of 0 K";
 facts[2] = "A <a href='https://en.wikipedia.org/wiki/Leap_second'>leap second</a> \
            is a one-second adjustment that is occasionally applied to Coordinated \
            Universal Time (UTC) in order to keep its time of day close to the mean \
            solar time as realized by UT1. This adjusment occurs on June 30 or \
            December 31, and at the end of these days after 23:59:59 goes 23:59:60.";
facts[3] = "<a href='https://en.wikipedia.org/wiki/Thoth'>Thoth</a>, one of the \
            deities of the Egyptian pantheon, has been depicted in many ways \
            depending on the era and on the aspect the artist wished to convey. \
            Usually, he is depicted in his human form with the head of an ibis. \
            In this form, he can be represented as the reckoner of times and seasons \
            by a headdress of the lunar disk sitting on top of a crescent moon \
            resting on his head.";

var shuffleFact = function() {
  var id = Math.round(Math.random() * (facts.length - 1));
  document.getElementById('fact').innerHTML = facts[id];
}
