source "https://rubygems.org"

gem "rails", "~> 7.2.2"
gem "sprockets-rails"
gem "puma", ">= 5.0"
gem "jsbundling-rails"
gem "cssbundling-rails"
gem "jbuilder"
gem "tzinfo-data", platforms: %i[ mswin mswin64 mingw x64_mingw jruby ]
gem "bootsnap", require: false
gem "pg"
gem "sassc"

group :development, :test do
  gem "debug", platforms: %i[ mri mswin mswin64 mingw x64_mingw ], require: "debug/prelude"
  gem "brakeman", require: false
  gem "rubocop-rails-omakase", require: false
end

group :development do
  gem "web-console"
  gem "error_highlight", ">= 0.4.0", platforms: [ :ruby ]
end
