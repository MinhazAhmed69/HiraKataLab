import React, { useState } from 'react';

const hiragana = [
    { character: 'あ', pronunciation: 'a', example: 'あさごはんをたべます。', pronunciationExample: 'Asagohan o tabemasu. (I eat breakfast.)' },
    { character: 'い', pronunciation: 'i', example: 'いぬがいます。', pronunciationExample: 'Inu ga imasu. (There is a dog.)' },
    { character: 'う', pronunciation: 'u', example: 'うみがきれいです。', pronunciationExample: 'Umi ga kirei desu. (The sea is beautiful.)' },
    { character: 'え', pronunciation: 'e', example: 'えんぴつをかいます。', pronunciationExample: 'Enpitsu o kaimasu. (I will buy a pencil.)' },
    { character: 'お', pronunciation: 'o', example: 'おおきいねこがいます。', pronunciationExample: 'Ookii neko ga imasu. (There is a big cat.)' },
  
    { character: 'か', pronunciation: 'ka', example: 'かばんをおきます。', pronunciationExample: 'Kaban o okimasu. (I put the bag down.)' },
    { character: 'き', pronunciation: 'ki', example: 'きれいな花があります。', pronunciationExample: 'Kirei na hana ga arimasu. (There is a beautiful flower.)' },
    { character: 'く', pronunciation: 'ku', example: 'くるまをうごかします。', pronunciationExample: 'Kuruma o ugokashimasu. (I will move the car.)' },
    { character: 'け', pronunciation: 'ke', example: 'けいたいをわすれました。', pronunciationExample: 'Keitai o wasuremashita. (I forgot my phone.)' },
    { character: 'こ', pronunciation: 'ko', example: 'この本がすきです。', pronunciationExample: 'Kono hon ga suki desu. (I like this book.)' },
  
    { character: 'さ', pronunciation: 'sa', example: 'さくらんぼをたべます。', pronunciationExample: 'Sakuranbo o tabemasu. (I eat cherries.)' },
    { character: 'し', pronunciation: 'shi', example: 'しんぶんをよみます。', pronunciationExample: 'Shinbun o yomimasu. (I read the newspaper.)' },
    { character: 'す', pronunciation: 'su', example: 'すしをたべます。', pronunciationExample: 'Sushi o tabemasu. (I eat sushi.)' },
    { character: 'せ', pronunciation: 'se', example: 'せんせいがきます。', pronunciationExample: 'Sensei ga kimasu. (The teacher is coming.)' },
    { character: 'そ', pronunciation: 'so', example: 'そのねこはかわいいです。', pronunciationExample: 'Sono neko wa kawaii desu. (That cat is cute.)' },
  
    { character: 'た', pronunciation: 'ta', example: 'たけやぶやけた。', pronunciationExample: 'Takeyabu yaketa. (The bamboo grove burned.)' },
    { character: 'ち', pronunciation: 'chi', example: 'ちずをみせてください。', pronunciationExample: 'Chizu o misete kudasai. (Please show me the map.)' },
    { character: 'つ', pronunciation: 'tsu', example: 'つきがみえます。', pronunciationExample: 'Tsuki ga miemasu. (The moon is visible.)' },
    { character: 'て', pronunciation: 'te', example: 'てがみをかきます。', pronunciationExample: 'Tegami o kakimasu. (I will write a letter.)' },
    { character: 'と', pronunciation: 'to', example: 'ともだちとあそびます。', pronunciationExample: 'Tomodachi to asobimasu. (I play with my friends.)' },
  
    { character: 'な', pronunciation: 'na', example: 'なつやすみはたのしいです。', pronunciationExample: 'Natsuyasumi wa tanoshii desu. (Summer vacation is fun.)' },
    { character: 'に', pronunciation: 'ni', example: 'にんぎょうをあそびます。', pronunciationExample: 'Ningyou o asobimasu. (I play with dolls.)' },
    { character: 'ぬ', pronunciation: 'nu', example: 'ぬのをぬいます。', pronunciationExample: 'Nuno o nuimasu. (I sew the cloth.)' },
    { character: 'ね', pronunciation: 'ne', example: 'ねこがねています。', pronunciationExample: 'Neko ga neteimasu. (The cat is sleeping.)' },
    { character: 'の', pronunciation: 'no', example: 'のどがかわきました。', pronunciationExample: 'Nodo ga kawakimashita. (I am thirsty.)' },
  
    { character: 'は', pronunciation: 'ha', example: 'はなをかいます。', pronunciationExample: 'Hana o kaimasu. (I will buy flowers.)' },
    { character: 'ひ', pronunciation: 'hi', example: 'ひこうきがうごきます。', pronunciationExample: 'Hikouki ga ugokimasu. (The airplane is moving.)' },
    { character: 'ふ', pronunciation: 'fu', example: 'ふゆはさむいです。', pronunciationExample: 'Fuyu wa samui desu. (Winter is cold.)' },
    { character: 'へ', pronunciation: 'he', example: 'へやをそうじします。', pronunciationExample: 'Heya o souji shimasu. (I clean the room.)' },
    { character: 'ほ', pronunciation: 'ho', example: 'ほしがいっぱいです。', pronunciationExample: 'Hoshi ga ippai desu. (There are many stars.)' },
  
    { character: 'ま', pronunciation: 'ma', example: 'まどをあけます。', pronunciationExample: 'Mado o akemasu. (I open the window.)' },
    { character: 'み', pronunciation: 'mi', example: 'みずをのみます。', pronunciationExample: 'Mizu o nomimasu. (I drink water.)' },
    { character: 'む', pronunciation: 'mu', example: 'むしがとびます。', pronunciationExample: 'Mushi ga tobimasu. (The insect flies.)' },
    { character: 'め', pronunciation: 'me', example: 'めがねをかけます。', pronunciationExample: 'Megane o kakemasu. (I wear glasses.)' },
    { character: 'も', pronunciation: 'mo', example: 'ももをたべます。', pronunciationExample: 'Momo o tabemasu. (I eat peaches.)' },
  
    { character: 'や', pronunciation: 'ya', example: 'やまをのぼります。', pronunciationExample: 'Yama o noborimasu. (I climb the mountain.)' },
    { character: 'ゆ', pronunciation: 'yu', example: 'ゆうべはさむかったです。', pronunciationExample: 'Yūbe wa samukatta desu. (It was cold last night.)' },
    { character: 'よ', pronunciation: 'yo', example: 'よるはあたたかいです。', pronunciationExample: 'Yoru wa atatakai desu. (The night is warm.)' },
  
    { character: 'ら', pronunciation: 'ra', example: 'らくだがうごきます。', pronunciationExample: 'Rakuda ga ugokimasu. (The camel moves.)' },
    { character: 'り', pronunciation: 'ri', example: 'りんごをたべます。', pronunciationExample: 'Ringo o tabemasu. (I eat an apple.)' },
    { character: 'る', pronunciation: 'ru', example: 'るすばんをします。', pronunciationExample: 'Rusuban o shimasu. (I will house-sit.)' },
    { character: 'れ', pronunciation: 're', example: 'れいぞうこにあります。', pronunciationExample: 'Reizouko ni arimasu. (It is in the refrigerator.)' },
    { character: 'ろ', pronunciation: 'ro', example: 'ろうそくをけします。', pronunciationExample: 'Rousoku o keshimasu. (I will put out the candle.)' },
  
    { character: 'わ', pronunciation: 'wa', example: 'わたしはせんせいです。', pronunciationExample: 'Watashi wa sensei desu. (I am a teacher.)' },
    { character: 'を', pronunciation: 'wo', example: 'わたしはおちゃをのみます。', pronunciationExample: 'Watashi wa ocha o nomimasu. (I drink tea.)' },
    { character: 'ん', pronunciation: 'n', example: 'ほんをよみます。', pronunciationExample: 'Hon o yomimasu. (I read a book.)' },
  ];

  const katakana = [
    { character: 'ア', pronunciation: 'a', example: 'アメリカにいきます。', pronunciationExample: 'Amerika ni ikimasu. (I am going to America.)' },
    { character: 'イ', pronunciation: 'i', example: 'イギリスへいきます。', pronunciationExample: 'Igirisu e ikimasu. (I am going to England.)' },
    { character: 'ウ', pronunciation: 'u', example: 'ウサギがかわいいです。', pronunciationExample: 'Usagi ga kawaii desu. (The rabbit is cute.)' },
    { character: 'エ', pronunciation: 'e', example: 'エレベーターにのります。', pronunciationExample: 'Erebētā ni norimasu. (I will take the elevator.)' },
    { character: 'オ', pronunciation: 'o', example: 'おおきなおうちがあります。', pronunciationExample: 'Ōkii o-uchi ga arimasu. (There is a big house.)' },
    
    { character: 'カ', pronunciation: 'ka', example: 'カメラをかいます。', pronunciationExample: 'Kamera o kaimasu. (I will buy a camera.)' },
    { character: 'キ', pronunciation: 'ki', example: 'きっさてんにいきます。', pronunciationExample: 'Kissaten ni ikimasu. (I will go to the café.)' },
    { character: 'ク', pronunciation: 'ku', example: 'くるまがあたらしいです。', pronunciationExample: 'Kuruma ga atarashii desu. (The car is new.)' },
    { character: 'ケ', pronunciation: 'ke', example: 'けっこんしきにいきます。', pronunciationExample: 'Kekkonshiki ni ikimasu. (I will go to the wedding.)' },
    { character: 'コ', pronunciation: 'ko', example: 'コンピュータをつかいます。', pronunciationExample: 'Konpyūta o tsukaimasu. (I use a computer.)' },
  
    { character: 'サ', pronunciation: 'sa', example: 'さかなをたべます。', pronunciationExample: 'Sakana o tabemasu. (I eat fish.)' },
    { character: 'シ', pronunciation: 'shi', example: 'しごとをしています。', pronunciationExample: 'Shigoto o shiteimasu. (I am working.)' },
    { character: 'ス', pronunciation: 'su', example: 'すしをたべたいです。', pronunciationExample: 'Sushi o tabetai desu. (I want to eat sushi.)' },
    { character: 'セ', pronunciation: 'se', example: 'せんせいはやさしいです。', pronunciationExample: 'Sensei wa yasashii desu. (The teacher is kind.)' },
    { character: 'ソ', pronunciation: 'so', example: 'それはわかりません。', pronunciationExample: 'Sore wa wakarimasen. (I don’t understand that.)' },
  
    { character: 'タ', pronunciation: 'ta', example: 'たべものをたくさんかいます。', pronunciationExample: 'Tabemono o takusan kaimasu. (I buy a lot of food.)' },
    { character: 'チ', pronunciation: 'chi', example: 'ちかくにこうえんがあります。', pronunciationExample: 'Chikaku ni kōen ga arimasu. (There is a park nearby.)' },
    { character: 'ツ', pronunciation: 'tsu', example: 'つくえのうえにほんがあります。', pronunciationExample: 'Tsukue no ue ni hon ga arimasu. (There is a book on the desk.)' },
    { character: 'テ', pronunciation: 'te', example: 'テレビをみます。', pronunciationExample: 'Terebi o mimasu. (I watch TV.)' },
    { character: 'ト', pronunciation: 'to', example: 'とけいをみます。', pronunciationExample: 'Tokei o mimasu. (I look at the clock.)' },
  
    { character: 'ナ', pronunciation: 'na', example: 'なつやすみにいきます。', pronunciationExample: 'Natsuyasumi ni ikimasu. (I will go on summer vacation.)' },
    { character: 'ニ', pronunciation: 'ni', example: 'にほんごをべんきょうします。', pronunciationExample: 'Nihongo o benkyō shimasu. (I study Japanese.)' },
    { character: 'ヌ', pronunciation: 'nu', example: 'ぬいぐるみがすきです。', pronunciationExample: 'Nuigurumi ga suki desu. (I like stuffed animals.)' },
    { character: 'ネ', pronunciation: 'ne', example: 'ねこがかわいいです。', pronunciationExample: 'Neko ga kawaii desu. (The cat is cute.)' },
    { character: 'ノ', pronunciation: 'no', example: 'のりものがすきです。', pronunciationExample: 'Norimono ga suki desu. (I like vehicles.)' },
  
    { character: 'ハ', pronunciation: 'ha', example: 'はなをあげます。', pronunciationExample: 'Hana o agemasu. (I give flowers.)' },
    { character: 'ヒ', pronunciation: 'hi', example: 'ひこうきにのります。', pronunciationExample: 'Hikōki ni norimasu. (I will board a plane.)' },
    { character: 'フ', pronunciation: 'fu', example: 'ふじさんはやまです。', pronunciationExample: 'Fujisan wa yama desu. (Mount Fuji is a mountain.)' },
    { character: 'ヘ', pronunciation: 'he', example: 'へやはあたたかいです。', pronunciationExample: 'Heya wa atatakai desu. (The room is warm.)' },
    { character: 'ホ', pronunciation: 'ho', example: 'ほしがみえます。', pronunciationExample: 'Hoshi ga miemasu. (I can see stars.)' },
  
    { character: 'マ', pronunciation: 'ma', example: 'まどをあけます。', pronunciationExample: 'Mado o akemasu. (I open the window.)' },
    { character: 'ミ', pronunciation: 'mi', example: 'みずをのみます。', pronunciationExample: 'Mizu o nomimasu. (I drink water.)' },
    { character: 'ム', pronunciation: 'mu', example: 'むしがいます。', pronunciationExample: 'Mushi ga imasu. (There is an insect.)' },
    { character: 'メ', pronunciation: 'me', example: 'めがねをかけます。', pronunciationExample: 'Megane o kakemasu. (I wear glasses.)' },
    { character: 'モ', pronunciation: 'mo', example: 'もりがたくさんあります。', pronunciationExample: 'Mori ga takusan arimasu. (There are many forests.)' },
  
    { character: 'ヤ', pronunciation: 'ya', example: 'やさいをたべます。', pronunciationExample: 'Yasai o tabemasu. (I eat vegetables.)' },
    { character: 'ユ', pronunciation: 'yu', example: 'ゆうびんきょくへいきます。', pronunciationExample: 'Yūbinkyoku e ikimasu. (I will go to the post office.)' },
    { character: 'ヨ', pronunciation: 'yo', example: 'よるにほんをよみます。', pronunciationExample: 'Yoru ni hon o yomimasu. (I read books at night.)' },
  
    { character: 'ラ', pronunciation: 'ra', example: 'ラーメンがすきです。', pronunciationExample: 'Rāmen ga suki desu. (I like ramen.)' },
    { character: 'リ', pronunciation: 'ri', example: 'りんごをたべます。', pronunciationExample: 'Ringo o tabemasu. (I eat an apple.)' },
    { character: 'ル', pronunciation: 'ru', example: 'るすばんをします。', pronunciationExample: 'Rusuban o shimasu. (I will house-sit.)' },
    { character: 'レ', pronunciation: 're', example: 'れいぞうこにいれます。', pronunciationExample: 'Reizōko ni iremasu. (I will put it in the fridge.)' },
    { character: 'ロ', pronunciation: 'ro', example: 'ろうかをあるきます。', pronunciationExample: 'Rōka o arukimasu. (I walk in the corridor.)' },
  
    { character: 'ワ', pronunciation: 'wa', example: 'わたしはがくせいです。', pronunciationExample: 'Watashi wa gakusei desu. (I am a student.)' },
    { character: 'ヲ', pronunciation: 'wo', example: 'ごはんをたべます。', pronunciationExample: 'Gohan o tabemasu. (I eat rice.)' },
    { character: 'ン', pronunciation: 'n', example: 'サンドイッチをたべます。', pronunciationExample: 'Sandoicchi o tabemasu. (I eat a sandwich.)' },
  ];

const kanji = [
  { character: '日', pronunciation: 'hi', example: '今日はいい天気ですね。', pronunciationExample: 'Kyou wa ii tenki desu ne. (The weather is nice today.)' },
  { character: '月', pronunciation: 'tsuki', example: '月がきれいです。', pronunciationExample: 'Tsuki ga kirei desu. (The moon is beautiful.)' },
  { character: '火', pronunciation: 'hi', example: '火をつけます。', pronunciationExample: 'Hi o tsukemasu. (I will light the fire.)' },
  { character: '水', pronunciation: 'mizu', example: '水をください。', pronunciationExample: 'Mizu o kudasai. (Please give me water.)' },
  { character: '木', pronunciation: 'ki', example: '木がたくさんあります。', pronunciationExample: 'Ki ga takusan arimasu. (There are many trees.)' },
  // Add examples for all Kanji
];

function Learn() {
  const [selectedSet, setSelectedSet] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showExample, setShowExample] = useState(false); // State to toggle visibility of the example sentence

  const handleClick = (letter) => {
    setSelectedLetter(letter);
    setShowExample(true); // Show example sentence when a letter is selected
  };

  // Function to highlight and underline the selected character
  const renderExampleSentence = (sentence, character) => {
    const parts = sentence.split(character);
    return parts.map((part, index) => {
      if (index !== parts.length - 1) {
        return (
          <>
            {part}
            <span className="underline font-bold text-red-600">{character}</span>
          </>
        );
      } else {
        return part;
      }
    });
  };

  const renderTable = (letters) => {
    const rows = [];
    for (let i = 0; i < letters.length; i += 5) {
      rows.push(letters.slice(i, i + 5));
    }

    return (
      <div className="overflow-x-auto mt-6">
        <table className="table table-zebra w-full text-center">
          <thead>
            <tr>
              <th>Character</th>
              <th>Pronunciation</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((item, idx) => (
                  <td 
                    key={idx} 
                    className="font-bold text-4xl p-2 hover:text-yellow-500 hover:scale-110 transition-all duration-200"
                    onClick={() => handleClick(item)}
                  >
                    <div>{item.character}</div>
                    <div className="text-sm mt-1">{item.pronunciation}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      <h1 className="text-4xl font-bold mb-6">Learn Hiragana, Katakana, and Kanji</h1>
      
      <div className="space-x-4">
        <button 
          className="btn btn-primary" 
          onClick={() => setSelectedSet(hiragana)}
        >
          Hiragana
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => setSelectedSet(katakana)}
        >
          Katakana
        </button>
        <button 
          className="btn btn-accent" 
          onClick={() => setSelectedSet(kanji)}
        >
          Kanji
        </button>
      </div>

      {selectedSet && !showExample && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">
            {selectedSet === hiragana ? 'Hiragana Letters' : selectedSet === katakana ? 'Katakana Letters' : 'Kanji Characters'}
          </h2>
          {renderTable(selectedSet)}
        </div>
      )}

      {showExample && selectedLetter && (
        <div className="mt-6 p-4 bg-gray-200 rounded-lg w-3/4">
          <h3 className="text-xl font-bold">Example Sentence</h3>
          <p className="mt-2 text-lg">
            {renderExampleSentence(selectedLetter.example, selectedLetter.character)}
          </p>
          <p className="mt-2 italic text-sm">{selectedLetter.pronunciationExample}</p>
          <button 
            className="btn btn-outline mt-4" 
            onClick={() => setShowExample(false)} // Hide the example sentence
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
export default Learn;