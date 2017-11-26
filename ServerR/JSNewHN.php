<?php
require "simple_html_dom.php";
$trang = $_GET["trang"]; settype($trang,"int");
$html = file_get_html("http://vnexpress.net/tin-tuc/the-gioi/page/".$trang.".html");

$tins = $html->find("#news_home li");

$mangTinTuc = array();
foreach($tins as $tin){
  $img =$tin->find("div.block_image_news",0);
  if(isset($img->innertext))
  {
      $hinh =$img->find("div.thumb a img",0);
      $src = $hinh->src;
      $tieude = $hinh->alt;
      $tomtat= trim($img->find(".news_lead",0)->innertext);
      $link= $img->find(".thumb a",0)->href;
        $mang= explode("-", $link);//cat mang
        $ptucuoi = $mang[count($mang) -1];//lay phan tu cuoi
      $key = str_replace(".html","",$ptucuoi);
      // echo $key."<hr/>";
      array_push($mangTinTuc, new Tin(
        $key, $tieude, $tomtat, $src, $link
      ));
  }
}
  echo json_encode($mangTinTuc);
class Tin{
  public $key;
  public $TIEUDE;
  public $TOMTAT;
  public $URL;
  public $LINK;
  function Tin($k,$t,$tt,$u,$l ){
    $this->key = $k;
    $this->TIEUDE = $t;
    $this->TOMTAT = $tt;
    $this->URL = $u;
    $this->LINK = $l;
  }

}
?>
