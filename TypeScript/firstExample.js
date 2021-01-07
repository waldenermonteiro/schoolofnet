function soma(x, y) {
    return x + y;
}
soma(1, 2);
var test = 'Junior';
var num = 2;
var juniorsName = 'Junior Monteiro';
var juniorsYearsOld = 23;
var arrayStrings = ['a', 'b', 'c'];
var arrayAny = ['a', 'b', 'c'];
var civilState;
(function (civilState) {
    civilState[civilState["Solteiro"] = 0] = "Solteiro";
    civilState[civilState["Casado"] = 1] = "Casado";
    civilState[civilState["Divorciado"] = 2] = "Divorciado";
})(civilState || (civilState = {}));
var myCivilState = civilState.Casado;
