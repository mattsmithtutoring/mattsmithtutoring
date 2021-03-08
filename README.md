# Matt Smith Tutoring

My tutoring website.

## Description

This is the code for my tutoring website, <https://mattsmithtutoring.com>. It is a static site written in Vue and uses Vuetify for formatting and components. It is hosted on [Netlify](https://www.netlify.com/).

## Set up the development environment

I use [Vagrant](https://www.vagrantup.com/) to run a local VM for my dev environment. Vagrant requires a backend VM software; I recommend [VirtualBox](https://www.virtualbox.org/). Follow these steps to set up the dev environment:

1. Download and install Virtualbox.
1. Download and install Vagrant.
1. Clone this repository down to your local machine.
1. Navigate to the cloned repository in the terminal.
1. Run `vagrant up`.
1. Once the command has completed, run `vagrant ssh` to ssh into the virtual machine.
1. Navigate to the directory in the VM linked to the repository: `cd /mattsmithtutoring`
1. Run the development server: `yarn serve`

Now you should be able to access the web page at `http://localhost:8080`
