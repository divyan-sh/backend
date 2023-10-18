## To use partials in HBS

First we need to register the path where all our partials are kept..
hbs.registerPartials("partial_path")

now to use partials simply use double curly braces with a extra a sign i.e ">"

{{>"partial_file_name"}}
