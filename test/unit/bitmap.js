(function displayBitmapTests() {

  var BitmapData = flash.display.BitmapData;
  var Rectangle = flash.geom.Rectangle;

  unitTests.push(function () {
    var bd = new BitmapData(10, 10, true, 0xFFAABBCC);
    eq(bd.getPixel(0, 0), 0xAABBCC);
    eq(bd.getPixel32(0, 0), 0xFFAABBCC, "Filled");
  });

  unitTests.push(function () {
    var bd = new BitmapData(100, 100, true, 0x11000000);
    bd.setPixel(0, 0, 0xff0000);
    eq(bd.getPixel(0, 0), 0xff0000);
    eq(bd.getPixel32(0, 0), 0x11ff0000);
    bd.setPixel32(0, 0, 0x22ff0000);
    eq(bd.getPixel32(0, 0), 0x22ff0000);
    bd.setPixel(0, 0, 0xff0000);
    eq(bd.getPixel32(0, 0), 0x22ff0000);
  });

  unitTests.push(function () {
    var bd = new BitmapData(100, 100, true, 0xff000000);
    bd.fillRect(new Rectangle(25, 25, 50, 50), 0xffff0000);
    eq(bd.getPixel32(24, 24), 0xff000000);
    eq(bd.getPixel32(25, 25), 0xffff0000);
    eq(bd.getPixel32(74, 25), 0xffff0000);
    eq(bd.getPixel32(74, 74), 0xffff0000);
    eq(bd.getPixel32(25, 74), 0xffff0000);
    eq(bd.getPixel32(75, 75), 0xff000000);
  });

  unitTests.push(function () {
    var bd = new BitmapData(100, 100, false, 0xff0033);
    eq(bd.getPixel32(0, 0), 0xffff0033);
    bd.setPixel32(0, 0, 0x11ff0033);
    eq(bd.getPixel32(0, 0), 0xffff0033);
  });

  unitTests.push(function () {
    var bd = new BitmapData(100, 100, true, 0);
    var perfect = true;
    var result = [0,32640,32576,32640,32608,32640,32577,32640,32624,32640,32575,32640,32607,32640,32631,32640,32632,32640,32619,32640,32610,32640,32634,32640,32625,32640,32625,32630,32635,32640,32580,32624,32636,32640,32572,32640,32628,32628,32625,32628,32625,32634,32631,32640,32631,32640,32637,32610,32631,32628,32620,32640,32634,32624,32613,32620,32626,32632,32626,32628,32610,32636,32610,32632,32638,32628,32634,32624,32606,32636,32618,32624,32610,32620,32626,32628,32595,32605,32598,32620,32630,32598,32634,32613,32631,32640,32639,32627,32610,32622,32625,32622,32616,32602,32623,32634,32637,32584,32633,32626,32605,32628,32589,32605,32609,32608,32601,32636,32617,32596,32619,32632,32597,32608,32605,32606,32599,32590,32625,32606,32625,32608,32637,32594,32611,32624,32633,32638,32639,32636,32629,32618,32603,32584,32629,32602,32623,32602,32635,32590,32617,32565,32585,32596,32609,32624,32625,32630,32633,32630,32619,32602,32595,32580,32562,32624,32595,32566,32623,32582,32635,32592,32557,32581,32635,32576,32613,32558,32581,32616,32555,32561,32578,32598,32617,32636,32548,32550,32559,32565,32566,32563,32573,32561,32558,32537,32543,32628,32605,32589,32569,32554,32637,32605,32571,32555,32633,32588,32563,32628,32584,32553,32613,32573,32589,32580,32541,32590,32544,32587,32542,32586,32537,32579,32631,32564,32603,32545,32586,32620,32549,32588,32627,32551,32585,32615,32526,32566,32595,32624,32542,32565,32587,32607,32525,32543,32560,32582,32598,32616,32625,32532,32546,32556,32568,32579,32590,32596,32608,32615,32622,32626,32632,32635,32638,32640];
    for (var a = 0; a < 256; a++) {
      var s = 0;
      for (var i = 0; i < 256; i++) {
        bd.setPixel32(0, 0, (a << 24) + i);
        s += bd.getPixel(0, 0);
      }
      check(Math.abs(s - result[a]) < 256, "Alpha " + a + " " + Math.abs(s - result[a]));
      if (s !== result[a]) {
        perfect = false;
      }
    }
    check(perfect, "Premultiplication was mostly okay, but not perfect.");
  });
})();