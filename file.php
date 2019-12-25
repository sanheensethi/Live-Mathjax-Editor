<?php
include "ini.php";
$data = '<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="5">
	'.$ini['script'].'
</head>
<body>
 '.$_POST['math'].'
</body>
</html>';

$f = fopen('data/show.html','w');
fwrite($f,$data);
?>