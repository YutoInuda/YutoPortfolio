import Modal from "react-modal";

export const Soundcloud = ({ isOpen3, toggleModalThree }) => {
  return (
    <Modal
      isOpen={isOpen3}
      onRequestClose={toggleModalThree}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      {" "}
      <div
        onClick={toggleModalThree}
        className="modal-video mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content">
            <div className="mfp-iframe-scaler">
              <button
                onClick={toggleModalThree}
                title="Close (Esc)"
                type="button"
                className="mfp-close"
              >
                ×
              </button>
              <iframe
                className="mfp-iframe"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Modal>
  );
};




export const Detail = ({ isOpen4, toggleModalFour }) => {
  return (
    <Modal
      isOpen={isOpen4}
      onRequestClose={toggleModalFour}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalFour}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/portfolio/7.jpg"
                  style={{
                    backgroundImage: 'url("assets/img/portfolio/7.jpg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Meta Crowdsourcing Game
                </h3>
                <span className="text-[14px]">Web</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  ゲームで社会課題を解決することができたらと考えたことはないだろうか。電車内を見渡すと、多くの人々がスマートフォンを持ち、カジュアルゲームで暇つぶしをしている姿を見ることができる。私は、この暇つぶしに当てられているエネルギーを社会のために活用することはできないだろうかと考えていた。そんな折に出会ったのが「クラウドソーシングゲーム」である。クラウドソーシングゲームとは、社会課題の解決のために必要な作業を市民に手伝ってもらうゲームである。私は、このクラウドソーシングゲームを普及させることで、社会がより楽しく、より豊かになると信じている。
                  </p>
                  <p>
                  今回は、このような想いから、クラウドソーシングゲームを知ってもらうためのプラットフォームを開発した。このプラットフォーム内では、クラウドソーシングゲームを遊ぶことで、社会貢献ポイントを獲得することができ、仮想の社会を発展させることができる。この体験を通じて、クラウドソーシングゲームで遊ぶことが、社会発展に繋がるのだという感覚を味わってほしい。そして、ゲームを基盤とした社会に思いを馳せてみてほしい。
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Web
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>2023/11/16</span>
                    </li>
                    {/* <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">URL</span>
                      <a className="text-[#7d7789]" target="_blank" href="https://crowdsourcing-game.vercel.app/"><span>https://crowdsourcing-game.vercel.app/</span></a>
                    </li> */}
                    {/* <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="additional_images w-full clear-both float-left h-auto">
                <ul className="ml-[-30px]">
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/10.png"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/10.png")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/11.png"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/11.png")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/9.png"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/9.png")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};


export const Hongo = ({ isOpen5, toggleModalFive }) => {
  return (
    <Modal
      isOpen={isOpen5}
      onRequestClose={toggleModalFive}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalFive}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/portfolio/本郷補完1.jpg"
                  style={{
                    backgroundImage: 'url("assets/img/portfolio/本郷補完1.jpg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  本郷補完計画（制作協力）
                </h3>
                <span className="text-[14px]">Other</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  本郷キャンパスの表層には、風雨により削られた舗装や剥離した壁面など、積年の痕跡が数多く存在する。意識しないと見えてこないその埋もれた痕跡を収集する。さらに、欠損部をスキャンして、その空白部分を実体化させることで、異質な素材により痕跡を「補完」する。補完には3Dスキャンや3Dプリント、CNCマシンなどを用いて、デジタルとリアルの間で情報を往復させた。  さあ、地図を片手にあなたも痕跡収集の旅へ。
                  </p>
                  <p>
                  ※二瓶雄太をリーダーとする「本郷補完計画」の制作協力者として、3Dプリントを用いた欠損部の補完を行った。写真の作品はすべて私（犬田悠斗）が制作したものである。
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Other
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>2023/11/16</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">制作者</span>
                      <span>二瓶雄太（リーダー）、犬田悠斗、福井桃子、中里朋楓、四方璃玖人、水上花那、ジャヤビクラマ幸一、乘濵駿平</span>
                    </li>
                    {/* <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">URL</span>
                      <a className="text-[#7d7789]" target="_blank" href="https://crowdsourcing-game.vercel.app/"><span>https://crowdsourcing-game.vercel.app/</span></a>
                    </li> */}
                    {/* <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="additional_images w-full clear-both float-left h-auto">
                <ul className="ml-[-30px]">
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/本郷補完3.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/本郷補完3.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/本郷補完4.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/本郷補完4.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/本郷補完5.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/本郷補完5.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};


export const Dance = ({ isOpen6, toggleModalSix }) => {
  return (
    <Modal
      isOpen={isOpen6}
      onRequestClose={toggleModalSix}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalSix}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/portfolio/dance2.jpg"
                  style={{
                    backgroundImage: 'url("assets/img/portfolio/dance2.jpg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Shall we dance?　一緒に踊らないかい
                </h3>
                <span className="text-[14px]">Game</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  与えられたカードで口説き文句を作り、相手に「この人いいな！」と思わせるカードゲーム。大人気ドラマをきっかけに、「Shall we dance? 一緒に踊らないかい?」という口説き文句が大バズり。英語と日本語を用いて、気になる人に声をかけることがイケている時代に。英語力を駆使して、より多くの気になる人から好感度を獲得しよう。英語でキザな口説き文句を面白おかしく言い合いながら、英語の助動詞や勧誘表現、依頼表現を学習することができる。
                  </p>
                  <p>
                  このゲームを通して、英語でキザな口説き文句を面白おかしく言い合いながら、英語の助動詞や勧誘表現、依頼表現を学習することができる。
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Game
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>2023/12/10</span>
                    </li>
                    {/* <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">制作者</span>
                      <span>二瓶雄太（リーダー）、犬田悠斗、福井桃子、中里朋楓、四方璃玖人、水上花那、ジャヤビクラマ幸一、乘濵駿平</span>
                    </li> */}
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">ルール</span>
                      <a className="text-[#7d7789]" target="_blank" href="https://docs.google.com/document/d/1aoyVX_jXUHH4NWdFyLM8jWCLeGCDpNEgCicZPThFKIU/edit?usp=sharing"><span>https://docs.google.com/document/d/1aoyVX_jXUHH4NWdFyLM8jWCLeGCDpNEgCicZPThFKIU/edit?usp=sharing</span></a>
                    </li>
                    {/* <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="additional_images w-full clear-both float-left h-auto">
                <ul className="ml-[-30px]">
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/dance3.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/dance3.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/dance4.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/dance4.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/dance1.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/dance1.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};


export const Sakebe = ({ isOpen7, toggleModalSeven }) => {
  return (
    <Modal
      isOpen={isOpen7}
      onRequestClose={toggleModalSeven}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalSeven}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/portfolio/sakebe1.png"
                  style={{
                    backgroundImage: 'url("assets/img/portfolio/sakebe1.png")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  さけべ！！！
                </h3>
                <span className="text-[14px]">Game</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  声を用いて人を避難させるゲーム。タイムプレッシャーに追われる中、より多くの人々に災害の危機を伝え、無事に避難させよう。また、日常でも遊んでもらい声出しの練習をしてもらえるように、声でりんごを落とすモードも実装。避難時に声かけを行える人が増加することを目的として開発。開発にあたっては、MonoGameと音声認識を用いる。
                  </p>
                  <p>
                  The 9th Serious Game Jamにおいて、The Best Game Awardを受賞。
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Game
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>2024/3/7</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">制作者</span>
                      <span>犬田悠斗（リーダー）、井上護、藤崎賢曙、横沢大斗、三田村勉</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">ウェブサイト</span>
                      <a className="text-[#7d7789]" target="_blank" href="https://gamejam1234.itch.io/1234"><span>https://gamejam1234.itch.io/1234</span></a>
                    </li>
                    {/* <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="additional_images w-full clear-both float-left h-auto">
                <ul className="ml-[-30px]">
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/sakebe2.png"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/sakebe2.png")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/sakebe3.png"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/sakebe3.png")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/sakebe5.png"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/sakebe5.png")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export const FreeWill = ({ isOpen8, toggleModalEight }) => {
  return (
    <Modal
      isOpen={isOpen8}
      onRequestClose={toggleModalEight}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalEight}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/portfolio/FreeWill.png"
                  style={{
                    backgroundImage: 'url("assets/img/portfolio/FreeWill.png")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  Free Willー自由意志と道徳的責任ー
                </h3>
                <span className="text-[14px]">Game</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  『Free Will 自由意志と道徳的責任』は、哲学の問題に関する人々の直感を明らかにするゲームです。
                  </p>
                  <p>
                  このゲームでは、自由意志と道徳的責任に関するシナリオを進めてもらい、最後にいくつかの質問に回答してもらいます。このゲームでの回答が、哲学の問題の解明に役立てられます。
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Game
                        </a>
                      </span>
                    </li>
                    {/* <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>2023/12/10</span>
                    </li> */}
                    {/* <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">制作者</span>
                      <span>二瓶雄太（リーダー）、犬田悠斗、福井桃子、中里朋楓、四方璃玖人、水上花那、ジャヤビクラマ幸一、乘濵駿平</span>
                    </li> */}
                    {/* <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">ルール</span>
                      <a className="text-[#7d7789]" target="_blank" href="https://docs.google.com/document/d/1aoyVX_jXUHH4NWdFyLM8jWCLeGCDpNEgCicZPThFKIU/edit?usp=sharing"><span>https://docs.google.com/document/d/1aoyVX_jXUHH4NWdFyLM8jWCLeGCDpNEgCicZPThFKIU/edit?usp=sharing</span></a>
                    </li> */}
                    {/* <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="additional_images w-full clear-both float-left h-auto">
                <ul className="ml-[-30px]">
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/FreeWill1.png"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/FreeWill1.png")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/FreeWill2.png"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/FreeWill2.png")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/FreeWill3.png"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/FreeWill3.png")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export const SF = ({ isOpen9, toggleModalNine }) => {
  return (
    <Modal
      isOpen={isOpen9}
      onRequestClose={toggleModalNine}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalNine}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/portfolio/WS4.jpg"
                  style={{
                    backgroundImage: 'url("assets/img/portfolio/WS4.jpg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                SF作品を作ろう！「ゲームを基盤とした社会」を創造するワークショップ
                </h3>
                <span className="text-[14px]">Other</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  SF作品を作ろう！「ゲームを基盤とした社会」を創造するワークショップは、SFの力でまだ存在しない未来を想像する「SFプロトタイピング」という手法を用いたワークショップです。
                  </p>
                  <p>
                  このワークショップでは、多くの人がゲームを通して世の中の発展に寄与する社会である「ゲームを基盤とした社会」をテーマに、まだ見ぬ世界を妄想してもらいました。
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Other
                        </a>
                      </span>
                    </li>
                    {/* <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>2023/12/10</span>
                    </li> */}
                    {/* <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">制作者</span>
                      <span>二瓶雄太（リーダー）、犬田悠斗、福井桃子、中里朋楓、四方璃玖人、水上花那、ジャヤビクラマ幸一、乘濵駿平</span>
                    </li> */}
                    {/* <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">ルール</span>
                      <a className="text-[#7d7789]" target="_blank" href="https://docs.google.com/document/d/1aoyVX_jXUHH4NWdFyLM8jWCLeGCDpNEgCicZPThFKIU/edit?usp=sharing"><span>https://docs.google.com/document/d/1aoyVX_jXUHH4NWdFyLM8jWCLeGCDpNEgCicZPThFKIU/edit?usp=sharing</span></a>
                    </li> */}
                    {/* <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="additional_images w-full clear-both float-left h-auto">
                <ul className="ml-[-30px]">
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/WS5.JPG"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/WS5.JPG")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/WS2.JPG"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/WS2.JPG")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/WS3.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/WS3.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export const Pets = ({ isOpen10, toggleModalTen }) => {
  return (
    <Modal
      isOpen={isOpen10}
      onRequestClose={toggleModalTen}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      <div className="cavani_tm_modalbox opened">
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={toggleModalTen}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/portfolio/わんにゃん.jpg"
                  style={{
                    backgroundImage: 'url("assets/img/portfolio/わんにゃん.jpg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  わんにゃん避難訓練
                </h3>
                <span className="text-[14px]">Game</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  『わんにゃん避難訓練』は、ペットとの避難所生活を体験するシミュレーションゲームです。避難所で起こる様々なトラブルを、コマンドを用いて解決することで、ペットの幸福度を回復させてください。トラブルを解決するために、ペットの飼い主など周囲の人と積極的に連携することを忘れずに。
                  </p>
                  <p>
                  The 10th Serious Game Jamにおいて、The Serious Game Grand Prizeを受賞。
                  </p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Game
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>2024/8/29</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">制作者</span>
                      <span>犬田悠斗、濵田智輝、西森祐翔、伊澤愛海、辻川太裕</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">ウェブサイト</span>
                      <a className="text-[#7d7789]" target="_blank" href="https://pisuke0115.itch.io/shelterpetsim"><span>https://pisuke0115.itch.io/shelterpetsim</span></a>
                    </li>
                    {/* <li className="w-full float-left">
                      <span className="first font-bold block">Share</span>
                      <ul className="share relative top-[7px]">
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/facebook.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="mr-[13px] inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/twitter.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li className="inline-block">
                          <a className="text-[#7d7789]" href="#">
                            <img
                              className="svg"
                              src="assets/img/svg/social/instagram.svg"
                              alt="image"
                            />
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="additional_images w-full clear-both float-left h-auto">
                <ul className="ml-[-30px]">
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/わんにゃん4.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/わんにゃん4.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/わんにゃん2.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/わんにゃん2.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="mb-[30px] float-left pl-[30px]">
                    <div className="list_inner w-full clear-both float-left h-auto relative">
                      <div className="my_image relative">
                        <img
                          className="relative opacity-0 min-w-full"
                          src="assets/img/thumbs/4-2.jpg"
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/わんにゃん3.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/わんにゃん3.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};