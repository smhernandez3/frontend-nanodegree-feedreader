$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        it('has URL defined and URL is not empty', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).not.toBe(undefined);
                expect(allFeeds[i].url).not.toBe('');
            }
        });
        it('has a name defined and the name is not empy', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).not.toBe(undefined);
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });
    describe('The Menu', function(){
        var body = document.body;
        it('is hidden by default', function(){
            expect(body.className).toBe('menu-hidden');
        });
        it('changes visibility when menu icon is clicked', function(){
            // affter clicking the menu icon once, verify that the menu displays
            $('a.menu-icon-link').trigger('click');
            expect(body.className).not.toBe('menu-hidden');
            // after clicking the menu icon once, verify that menu is hidden
            $('a.menu-icon-link').trigger('click');
            expect(body.className).toBe('menu-hidden');
        });
    });
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, done);
        });
        it('loadFeed has been called and one .entry in the .feed container', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
    describe('New Feed Selection', function(){
        var current;
        beforeEach(function(done){
            $('.feed').empty();
            loadFeed(0, function(){
                current = $('.feed').html();
                loadFeed(1, done);
            });
        });
        it('is loaded and content has changed', function(){
            expect($('.feed').html()).not.toBe(current);
        });
    });
}());