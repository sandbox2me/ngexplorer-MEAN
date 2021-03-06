'use strict';

describe('Directive: ngIncludeTemplate', function () {

  // load the directive's module
  beforeEach(module('ngExplorerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-include-template></ng-include-template>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngIncludeTemplate directive');
  }));
});
