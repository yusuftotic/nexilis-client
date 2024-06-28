import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPostById } from '../../slices/postSlice';

import './Post.css';
import { formatDate } from '../../utils/utils';

export default function Post() {

  const { post_id } = useParams();

  const dispatch = useDispatch();

  const post = useSelector(state => state.post.post);

  useEffect(() => {

    dispatch(getPostById({ post_id }));

  }, [dispatch]);

  return (
    <div className="post">
      {/* <div className="postHeader">
        <h2 className="postTitle">ChatGPT: Yapay Zekanın Sınırlarını Zorlayan Konuşma Modeli</h2>
        <p className="postDate">Thursday, 27 June 2024</p>
      </div>
      <div className="postContent">
        <p className="postText">ChatGPT, OpenAI tarafından geliştirilen ve doğal dil işleme (NLP) alanında devrim niteliğinde olan bir yapay zeka modelidir. GPT-4 mimarisi üzerine inşa edilen ChatGPT, metin tabanlı insan etkileşimlerini anlamak ve yanıtlamak için tasarlanmıştır. Bu model, geniş bir dil veri kümesi üzerinde eğitilmiş olup, farklı dillerde ve çeşitli konularda etkileyici yanıtlar üretebilme kapasitesine sahiptir. ChatGPT, kullanıcıların metin tabanlı sorularını anlayarak doğal ve tutarlı yanıtlar verir. Bu özellik, müşteri hizmetlerinden teknik desteğe, eğitim materyallerinden kişisel asistanlığa kadar birçok alanda kullanım potansiyeli taşır. Kullanıcılar, ChatGPT ile sohbet ederek bilgi edinebilir, öneriler alabilir ve hatta yaratıcı yazılar bile oluşturabilir. ChatGPT'nin başarısının arkasındaki temel faktör, geniş çaplı dil modelleme ve derin öğrenme algoritmalarıdır. Model, milyarlarca parametre kullanarak dilin karmaşıklıklarını ve inceliklerini öğrenir. Bu sayede, bağlamı anlama ve uygun yanıtlar üretme yeteneği oldukça yüksektir. Ayrıca, sürekli güncellenen ve genişleyen veri kümeleri ile model, güncel bilgileri de yanıtlarına dahil edebilir. ChatGPT'nin kullanım alanları genişlemeye devam ediyor. İş dünyasında, müşteri hizmetleri ve destek sistemlerinde otomasyon sağlamak için kullanılabilir. Eğitimde, öğrencilere ve öğretmenlere yardımcı olabilir, karmaşık konuları basit bir dille açıklayabilir. Ayrıca, kişisel kullanımda, yazı yazma ve yaratıcı projelerde ilham kaynağı olarak hizmet verebilir. Gelecekte, ChatGPT ve benzeri yapay zeka modelleri, daha da gelişerek daha karmaşık ve insana özgü etkileşimleri yönetme kapasitesine sahip olacak. Ancak, bu teknolojinin etik ve sorumlu kullanımı da önem arz etmektedir. Yapay zeka modellerinin tarafsız ve güvenilir olması, yanıltıcı bilgileri yaymaması ve kullanıcı mahremiyetine saygı göstermesi kritik öneme sahiptir. Sonuç olarak, ChatGPT, yapay zeka teknolojilerinin geldiği noktayı ve gelecekte nereye evrilebileceğini gösteren etkileyici bir örnektir. Doğal dil işleme yetenekleriyle, birçok sektörde yenilikçi çözümler sunarak hayatımızı kolaylaştırmaya ve zenginleştirmeye devam edecek.</p>
      </div> */}
      <div className="postHeader">
        <h2 className="postTitle">{post.title}</h2>
        <p className="postDate">{formatDate(post.createdAt)}</p>
      </div>
      <div className="postContent">
        <p className="postText">{post.content}</p>
      </div>
    </div>
  );
}
