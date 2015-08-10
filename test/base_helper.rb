require 'rubygems'
require 'bundler/setup'
require 'test/unit'
if RUBY_VERSION >= '1.9.3'
  require 'debugger'
end
require 'rails'

module TestApp
  class Application < Rails::Application
    config.root = File.dirname(__FILE__)
    config.active_support.deprecation = :log
    config.logger = Logger.new(STDOUT)
  end
end

module ClientSideValidations; end
