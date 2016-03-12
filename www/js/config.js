app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.feeds', {
    url: '/feeds',
    views: {
      'tab-feeds': {
        templateUrl: 'templates/tab-feeds.html',
        controller: 'FeedsCtrl'
      }
    }
  })

  .state('tab.post', {
    url: '/feeds/:post_id',
    views: {
      'tab-feeds': {
        templateUrl: 'templates/tab-feeds-single.html',
        controller: 'FeedsSingleCtrl'
      }
    }
  })

  .state('tab.premium', {
      url: '/premium',
      views: {
        'tab-premium': {
          templateUrl: 'templates/tab-premium.html',
          controller: 'PremiumCtrl'
        }
      }
    })

  .state('tab.premium_post', {
    url: '/premium/:post_id',
    views: {
      'tab-premium': {
        templateUrl: 'templates/tab-premium-single.html',
        controller: 'PremiumSingleCtrl'
      }
    }
  })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('tab.buy_and_sell', {
    url: '/buy_and_sell',
    views: {
      'tab-buy_and_sell': {
        templateUrl: 'templates/tab-buy-and-sell.html',
        controller: 'BuyAndSellCtrl'
      }
    }
  })

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/feeds');

});