function skillsMember() {
    return{
        restrict: 'E',
        templateUrl: 'modules/skills/member.html',
        controller: 'MemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: 
            {
            member: '='
            }
        };
    }