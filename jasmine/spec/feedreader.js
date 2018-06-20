$(function () {

  describe('RSS Feeds', function () {

    it('are defined', function () {
      expect(allFeeds)
        .toBeDefined();
      expect(allFeeds.length)
        .not.toBe(0);
    });

    /*Testa se cada objeto feed em allFeeds tem atributo URL definido e não é vazio*/

    it('has a URL defined', function () {
      for (const feed of allFeeds) {
        expect(feed.url)
          .toBeDefined();
        expect(feed.url)
          .not.toBe("");
      }
    });

    /* Testa se cada objeto feed em allFeeds tem atributo name definido e não seja vazio */

    it('has a defined name and not empty', function () {
      for (const feed of allFeeds) {
        expect(feed.name)
          .toBeDefined();
        expect(feed.name)
          .not.toBe('');
      }
    });

  });

  /* Novo teste para o Menu chamado "The menu" */

  describe('The Menu', function () {
    var body = document.querySelector("body")
      .classList;
    /* Testa se a classe menu-hidden está ativada por padrão, ou seja, se o body contem a classe menu-hidden */
    it('menu hidden', function () {
      expect(body)
        .toContain("menu-hidden");

    });

    /* Testa se ao clicar no menu sua visibilidade é alterada. Ao clicar no menu, ele
    e visualizado e ao clicar novamente ele deve esconder */

    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */

    it('menu visibility', function () {
      var menu_icon = document.querySelector(".menu-icon-link");
      menu_icon.click();
      expect(body)
        .not.toContain("menu-hidden");
      menu_icon.click();
      expect(body)
        .toContain("menu-hidden");
    });
  });


  /* Teste chamado Initial Entries*/

  describe("Initial Entries", function () {

    /* Pelo menos 1 entry em feed*/

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;

    beforeEach(function (done) {

      loadFeed(0, function () { 
        done(); 
      }); 

    });

    it("Pelo menos um feed", function () {

      var feed = document.querySelector(".feed");
      var feed_children = feed.children;
      var entry_link = feed_children[0];
      var entry = entry_link.children[0];
      console.log(feed);
      console.log(feed_children);
      console.log(entry_link);
      console.log(entry);
      var entry_classList = entry.classList;
      expect(entry_classList)
        .toContain("entry");

    });
  });

  /* Teste New Feed Selection*/

  describe("New Feed Selection", function () {

    var feed0;
    var feed1;

    beforeEach(function (done) {

      loadFeed(0, function () { 
        feed0 = document.querySelector(".feed")
          .innerHTML;
        loadFeed(1, function () {
          feed1 = document.querySelector(".feed")
            .innerHTML;
          done();

        });
      }); 
    });


    /*Teste para ter garantia de que o conteúdo do feed muda
    quando um novo feed é carregado pela função loadFeed */
    it("Novo feed carregado", function () {
      expect(feed0)
        .not.toBe(feed1);
    });
  });

}());
