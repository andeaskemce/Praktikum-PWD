<?php
require_once 'Kucing.php';
require_once 'Anjing.php';

$kucing = new Kucing();
$kucing->setNama("Dyas");
$kucing->setUmur(2);

$anjing = new Anjing();
$anjing->setNama("Vinvin");
$anjing->setUmur(3);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Data Hewan</title>
</head>
<body>

    <h2>Data Hewan</h2>

    <h3>Kucing</h3>
    Nama: <?php echo $kucing->getNama(); ?><br>
    Umur: <?php echo $kucing->getUmur(); ?> Tahun<br>
    Jenis: Kucing<br>
    Suara: <?php echo $kucing->getSuara(); ?><br>

    <h3>Anjing</h3>
    Nama: <?php echo $anjing->getNama(); ?><br>
    Umur: <?php echo $anjing->getUmur(); ?> Tahun<br>
    Jenis: Anjing<br>
    Suara: <?php echo $anjing->getSuara(); ?><br>

</body>
</html>