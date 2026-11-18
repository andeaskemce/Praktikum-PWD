<?php

class Segitiga {
    public function luas() {
        return 0;
    }

    public function keliling() {
        return 0;
    }
}

class SegitigaSiku extends Segitiga {
    private $alas, $tinggi;

    function __construct($a, $t) {
        $this->alas = $a;
        $this->tinggi = $t;
    }

    function luas() {
        return ($this->alas * $this->tinggi) / 2;
    }

    function keliling() {
        $miring = sqrt(
            ($this->alas * $this->alas) +
            ($this->tinggi * $this->tinggi)
        );

        return $this->alas + $this->tinggi + $miring;
    }
}

class SegitigaSamaKaki extends Segitiga {
    private $alas, $tinggi;

    function __construct($a, $t) {
        $this->alas = $a;
        $this->tinggi = $t;
    }

    function luas() {
        return ($this->alas * $this->tinggi) / 2;
    }

    function keliling() {
        $kaki = sqrt(
            ($this->alas / 2) * ($this->alas / 2) +
            ($this->tinggi * $this->tinggi)
        );

        return $this->alas + (2 * $kaki);
    }
}

class SegitigaSamaSisi extends Segitiga {
    private $sisi;

    function __construct($s) {
        $this->sisi = $s;
    }

    function luas() {
        return (sqrt(3) / 4) * $this->sisi * $this->sisi;
    }

    function keliling() {
        return 3 * $this->sisi;
    }
}

$siku = new SegitigaSiku(2, 3);
$kaki = new SegitigaSamaKaki(7, 3);
$sisi = new SegitigaSamaSisi(9);

echo "Segitiga Siku-Siku<br>";
echo "Luas: " . number_format($siku->luas(), 2) . "<br>";
echo "Keliling: " . number_format($siku->keliling(), 2) . "<br><br>";

echo "Segitiga Sama Kaki<br>";
echo "Luas: " . number_format($kaki->luas(), 2) . "<br>";
echo "Keliling: " . number_format($kaki->keliling(), 2) . "<br><br>";

echo "Segitiga Sama Sisi<br>";
echo "Luas: " . number_format($sisi->luas(), 2) . "<br>";
echo "Keliling: " . number_format($sisi->keliling(), 2) . "<br>";
