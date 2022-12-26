package com.example.garments;

import com.example.garments.models.Pictures;
import com.example.garments.repository.PicturesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
class LoadDatabasePictures {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabasePictures.class);

    @Bean
    CommandLineRunner initDatabasePictures(PicturesRepository repository) {

        return args -> {
           /*log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/a7ef4c245a083d5db2a2ac3f1669100d/af0648cd68f8472aa8fed72e6fb060a2.jpg?imwidth=303&filter=packshot",1)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/462ea73d79453a2aa1e36c59c41806e1/7bd88e87032140a6b1b51aa1a74975b8.jpg?imwidth=156 ",1)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/6262832cfdc03f38af4a88493c6d09ea/15526027a9ac4b09a42e1defcbb48bb8.jpg?imwidth=156", 1)));
      log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/00496cb257c14862a757057ed5831c2a/158846a7e99a4393a075bf8a32792e84.jpg?imwidth=1800&filter=packshot",2)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/4cfd855bd97b454ba1618db513159e82/db1baa6101eb40eca6dc3180eae62b49.jpg?imwidth=156",2)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/3e02f83234674283861da4580a53870c/6aabcf38e3f34c5abd44cbd413243789.jpg?imwidth=762",2)));
      log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/09a264c87e874590bcf163724213e3ad/3b382407a21b4628abd6944e16233775.jpg?imwidth=1800&filter=packshot",3)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/9f74dda2daf94abcb1bd4f42ec9ef8e7/7e5981bd6cc0498a91c52748207870b0.jpg?imwidth=1800",3)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/d1358f1dbc244897b3b2f742d84e8606/403863c433094f4e835fbd2a7b3dff29.jpg?imwidth=1800",3)));
       log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/21b967f22eb244c3a74aeb637641e4f3/b349ab8211b942b0915f3a985626b7f3.jpg?imwidth=1800&filter=packshot",4)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/4b54e72280b74194a334a63eecf7b86d/d7cc8ab3e3794144bc1da2379774a9c0.jpg?imwidth=762",4)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/8e673aa7f8014d398ca104b9fc7e2870/2cd2735fa14345248723276a96d8ef10.jpg?imwidth=1800",4)));
       log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/3e7f1895e76a4196a8328c88da4c5b37/7233697f3ab84c3f9fc3548cb7fa32d4.jpg?imwidth=1800&filter=packshot",5)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/c49692dfb4f1411ab5356075e24ef1a3/50352a99a79246ba8d5e7e3baa3d1020.jpg?imwidth=1800",5)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/db8512deaf5041aa8927a88129ab10d9/479f9dc152b040f49d35f76443f50802.jpg?imwidth=1800",5)));
       log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/e03aa8dbdd61410398f7947283770a08/e976fc7130bd41c0a86fa547ba264ddb.jpg?imwidth=1800&filter=packshot",6)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/6003b4f5dee14956a46dd14026136bfc/c7c5e82368ad4efa8b0210c539aff989.jpg?imwidth=1800",6)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/9bd18d3975c3465e8553ca3763397b3a/b702604bda654146b5cc1ac450023d9c.jpg?imwidth=1800",6)));
      log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/65d0d8be240245c5ab15326d29e378ea/6a0eb8f28f994887897adee2177b4b45.jpg?imwidth=762&filter=packshot",7)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/5c1980f41cf1495bb33dbb6fdf629155/81f06c4368304a1eb6d78676b724ff3d.jpg?imwidth=762",7)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/6bd85961a5874a3cba55ac6cee510e7e/7aeebcd2683c4c7c883862e3995bdfd9.jpg?imwidth=762",7)));
       log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/3d0fd5e4f3fe31f4bd13bdd4a0ec6dc0/55f5b1c2dda54fbba202f704011b5301.jpg?imwidth=1800&filter=packshot",8)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/7b09cd439b7a3dd8add5a1e33b267504/b0e160364e38475282c42864d5f38c5e.jpg?imwidth=762",8)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/2e855c3a6c4b353fad5944c78d775103/52fca3a0b85b421cb72c0b527982bd3d.jpg?imwidth=762",8)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/e1369cb165b33faf8696dd266d82956f/6a551ada9dad4e5d9a5c7e8eb67c0ff1.jpg?imwidth=762",9)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/2b17b64098923e98a00fd816d6f54d22/40801cf6917a4ce5a114b11f2866aa97.jpg?imwidth=1800&filter=packshot",9)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/b50f8795c8f43257b54f5c65c75b03a3/2d7e34ba55624d16bee00d775022341f.jpg?imwidth=1800",9)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/ec212aff57e24977ab847d78b768b7b7/472c0423ba6540aa96833673e3db1251.jpg?imwidth=1800&filter=packshot",10)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/1571de584f8a4e2f9ddb8a46092c1441/1d4ea1b642a44769a8eae68a13ff80e0.jpg?imwidth=1800",10)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/e3dfae03bec7490c8b530e3fb235de45/fb97f26c739b4f7ab923d92365f151d3.jpg?imwidth=762",10)));
       log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/3115f0ee77f34b149c0a92096c7710d9/11f92aececce4562a00fae267486128d.jpg?imwidth=762",11)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/c0e6c66e0e344d2f947ba60bd71b8a0b/e62eb9a2daf14be0b6ad8c7491649b5d.jpg?imwidth=1800",11)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/12d8135592b24da7b54ca86a2ed0f3fe/6e8591b4276f462baae6fd5bb1a1d57c.jpg?imwidth=762",11)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/4d59653e250844018ed97e82c315a4b0/41d9543fe51a4152acdd56f089e56601.jpg?imwidth=762&filter=packshot",12)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/5629763180a948a7810efe19bd89b7cd/17d700cbbebb4262bab1cf2b7e1d8222.jpg?imwidth=1800",12)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/1abe301d01de4edcbc95ce8d711ccc22/b00c2458eb2c4c28bb978d07562a2174.jpg?imwidth=1800",12)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/647fd8087c6646859439a84eaf0535cd/c107a57396cb4e9b8cc6a1f31d559fad.jpg?imwidth=762&filter=packshot",13)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/73969dd20e464ace8fbf611b83efb06e/3dc2833c82844016a319967341266df7.jpg?imwidth=762",13)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/1bd0e4c6363d45e99760c86a5b2ca0f0/3330149a952749ecaa59f0cdf22e3f26.jpg?imwidth=1800",13)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/5bceb4ee5244400dba2b0c4000718d47/2b5e53d2469e4553ad13ef939a1ce7d8.jpg?imwidth=762&filter=packshot",14)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/1fe6df43fdb54bbdbad8d16446b019bf/492525c5c25c41a9abef15c8dd45a5d7.jpg?imwidth=762",14)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/4e0f0b9078fa49b5a9861de069d3225f/4cd65ad9bfd543d79a8e9f548e4e1ede.jpg?imwidth=762",14)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/366272826bbf4bdaa16a2922e946bfeb/ae1d354d571b432e97741451dc5efa78.jpg?imwidth=1800&filter=packshot",15)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/f5d4a151ae7049e5aff247bc2db2ab54/b5af4218f6ad4ef98822ab07845efcc5.jpg?imwidth=1800",15)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/366272826bbf4bdaa16a2922e946bfeb/ae1d354d571b432e97741451dc5efa78.jpg?imwidth=1800&filter=packshot",15)));
      log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/9c3baca93cfb41f1918b85315e76ab0c/0c508f4f7e554ce99197dbe74ca14842.jpg?imwidth=762&filter=packshot",16)));
       log.info("Preloading " + repository.save(new Pictures ("https://img01.ztat.net/article/spp-media-p1/6eca5b3d83b74791afc445341079becd/e2cad22fe66f47eb9707e1f17c4ebd45.jpg?imwidth=762",16)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/6c5d34f1faa04a82b25b66e0d8fd287c/2c74b4f4f8154ec9a931a3b399e0c2b3.jpg?imwidth=762",16)));
       log.info("Preloading " + repository.save(new Pictures ("https://img01.ztat.net/article/spp-media-p1/380715658d7c44539bc0f35e0ab6f15e/188f8318c51b4b0ea27f09ff296ec58f.jpg?imwidth=762&filter=packshot",17)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/ee3573767bcf4ab08b590b13b8aed63d/ce32b710c72f497aa1354d4405a9eb36.jpg?imwidth=762",17)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/962bb0703c614fa9bb2842318ac83960/512dcf97a4954707b37f54a0c4c4b066.jpg?imwidth=762",17)));
      log.info("Preloading " + repository.save(new Pictures ("https://img01.ztat.net/article/spp-media-p1/37300cf99b924248936effddbeefa7f9/616ff0a1e5844825804995da5d9fbed8.jpg?imwidth=1800&filter=packshot",18)));
       log.info("Preloading " + repository.save(new Pictures ("https://img01.ztat.net/article/spp-media-p1/9ad05025ed9849ddaba8071445d1ab51/ea2e4e45ce7645adbd87c18f9b757bbe.jpg?imwidth=1800",18)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/99b1b6898df9473b8269826abfbb0a62/108a23ef60884b51b92dcc3dc4c1945c.jpg?imwidth=762",18)));
       log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/9821f35c953c43ba9c339dd7a32f9c00/6c587dac33d34c489b70f49697a9e48f.jpg?imwidth=1800&filter=packshot",19)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/82803b1e92de49109cedd4fc507617d1/150d727ba856451ea6162bbdea5c9765.jpg?imwidth=1800",19)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/9821f35c953c43ba9c339dd7a32f9c00/6c587dac33d34c489b70f49697a9e48f.jpg?imwidth=1800&filter=packshot",19)));
       log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/ae04a9b239d145b1a150efd6d3f64219/e4ba009820fe47d89c161443ad43e64a.jpg?imwidth=1800&filter=packshot",20)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/87a9b9e73cea4d28b47217df8624b957/a4f379397d3046fd8320f5a96bd86f77.jpg?imwidth=1800",20)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/9362bbb88b2f4ceebe02d40f0b1fa340/d1558272e6394938bd1d3c9ad8f87196.jpg?imwidth=1800",20)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/0e52807455744ab3b7ada76edd17bce6/13440330ee8b49eda8e926be07acc137.jpg?imwidth=1800&filter=packshot",21)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/77eb145660b64a23b0efd97387dec5e0/23624ab4a254460ab857b035c7b87489.jpg?imwidth=762",21)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/5c9ff98438e64b72b2a3c433c2c7b8da/03131ea374b0462eb57d801977c8d532.jpg?imwidth=762",21)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/e0583a05d1c64392aa70e91d8826dbd6/07a0da6ba5db465b93a761d2ba75a7ac.jpg?imwidth=1800",22)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/58b9b8d5dbe9403f99efe64a00129483/2468b03ea9154ea1943a5cdef98606bb.jpg?imwidth=1800",22)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/9fda7d1fd48d4c17926e1575295757ce/e46d0c4ceb9145329bed16eb0275cbd7.jpg?imwidth=1800",22)));
       log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/c8262b4bc5a24fa9b4b2485c185d564b/ad53e4f00f774c4093af16b27c8b683d.jpg?imwidth=762&filter=packshot",23)));
       log.info("Preloading " + repository.save(new Pictures ("https://img01.ztat.net/article/spp-media-p1/dcc88594979243fd91314ed556d275ed/5964f06fcbad4f8ea1d3bf3bfc7475b8.jpg?imwidth=1800",23)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/5e425ac354e245c88bc76698a39f941e/3fd88b9564364818a86195865caea6b7.jpg?imwidth=1800",23)));
       log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/845a402d73dc4b54849decb137c4b041/fa4a60cafe7c40b0bb56aa269d44aea7.jpg?imwidth=1800&filter=packshot",24)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/a7ca22945f524979b0b5f45a2a0d0d7d/e5769e37060e4118b9f7127577e00913.jpg?imwidth=762",24)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/add5c77a9635413b91b0e854e328acf6/f23d937fdba74549b81f55673cd4fdf8.jpg?imwidth=762",24)));
       log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/befe2953d45549ebb01a8a12872b5240/f5231475811446ddab11c1e85e569dcc.jpg?imwidth=1800&filter=packshot",25)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/ffd3e88f08324021a0720f30630dcd17/5b52490060d443b98a706a8d0454e35d.jpg?imwidth=762",25)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/3360a6a5e0e24818b0374bbf47ccdeb6/91d9dc4b595a43eda25b9d8c0c054304.jpg?imwidth=1800",25)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/afcccae33ca344469ded8b432ccf4bb4/ab4d1067f3754479b9f23a4218141724.jpg?imwidth=762&filter=packshot",26)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/ae3b3346435049a99cbb2375c789f82c/9fc11cf867e8469daf6cd8fe5d9261c7.jpg?imwidth=1800",26)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/abaede76c353403590068e64858ac582/4e0df85943e448a483a6e01ab761202f.jpg?imwidth=1800",26)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/1b49f52f047732fcb9d25cc17eebc417/6e057cdc6fe04bdabe0b21243fd4e6f4.jpg?imwidth=1800&filter=packshot",27)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/2e150e4888d13e8591916019628f6b5e/b0c3760586784ec58745d2a63dde3341.jpg?imwidth=762",27)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/73dfe1a0291a3e3fba4ad92612c024ac/85577bc0460b435ab73e9347486281ae.jpg?imwidth=762",27)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/d677e2f15aa144d6bfa418e8721201d4/001cf51f7bf241aeb7f6be5b4d9f22a0.jpg?imwidth=762&filter=packshot",28)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/34799b99ff894584bab8b7478957ff76/899b503e2948479896c20d15e27f56ca.jpg?imwidth=1800",28)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/8dc72d12993e4ffdb0e59426a6ff3327/d84d72455af349ec9d4716d19b0da39d.jpg?imwidth=1800",28)));
      log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/9b3c011ab650472e82277e74e1b86e42/ed80e10d97944863b2cdbe8c0f13c2fe.jpg?imwidth=1800",29)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/e60e7c0ee6b94350a491a41111e6cdfc/4f4b4b591f0a46ed824f1ce54ce4324c.jpg?imwidth=1800",29)));
        log.info("Preloading " + repository.save(new Pictures("https://img01.ztat.net/article/spp-media-p1/dc0eaf0b82684b9893893c479bd9bc89/e4f7b41ab5e14ecfac104df9eb5302e8.jpg?imwidth=1800&filter=packshot",29)));
        */};
    }
}
