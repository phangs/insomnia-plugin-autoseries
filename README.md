# insomnia-plugin-autoseries

This is a series number generator with a prefix. This uses the local storage in electron and not Insomnia's context.store facility.

# To do:
* Feature to reset the series when the number is too high. Only way to reset now is by clearing the local storage under DevTools
* Prevent Insomnia to trigger generation of new series every time the mouse hovers on the template tag
* Set desired number of zero-padding in the series
* Lear how to release in npm for others to use :D
