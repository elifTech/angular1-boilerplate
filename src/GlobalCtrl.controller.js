GlobalCtrl.$name = 'GlobalCtrl';

export default
/* @ngInject */
function GlobalCtrl($scope, $state, AuthService) {
  const vm = this;

  vm.$state = $state;
  vm.logginedUser = null;

  vm.signOut = signOut;

  $scope.$on('userChanged', (e, user) => {
    vm.logginedUser = user;
    if (!user) {
      $state.go('signin');
    } else {
      //  $state.go('home');
    }
  });

  function signOut() {
    AuthService.signOut();
  }
}