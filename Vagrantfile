Vagrant.configure("2") do |config|
  # Require Vagrant to be at least the release that this Vagrantfile was created on
  Vagrant.require_version ">= 2.2.14"
  # Use Ubuntu 18.04 LTS (Bionic Beaver) as the base image
  config.vm.box = "hashicorp/bionic64"
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 2
  end
  config.vm.define "vue" do |vue|
    # Set the VM's hostname
    vue.vm.hostname = "vue"
    # Forward ports
    vue.vm.network "forwarded_port", host_ip: "127.0.0.1", host: 8080, guest: 8080
    vue.vm.network "forwarded_port", host_ip: "127.0.0.1", host: 8888, guest: 8888
    vue.vm.synced_folder ".", "/mattsmithtutoring", create: true
    vue.vm.provision "shell", inline: <<-SHELL
      # Mahe sure apt and the OS are up-to-date
      apt-get update -yq
      apt-get upgrade -yq
      # Install node and npm
      curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
      sudo apt-get install -y nodejs
      
      # Install yarn
      curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -  
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list  
      apt-get update && apt-get -yq install yarn

      # Install vue-cli and other tools from package.json
      cd /mattsmithtutoring
      yarn install

      # Increase file watcher limit
      echo -e "\n# Increase file watcher limit\nfs.inotify.max_user_watches=1048576" >> /etc/sysctl.conf
      sysctl -p /etc/sysctl.conf

      # Install netlify-cli
      yarn global add netlify-cli

      # Add /home/vagrant/.yarn/bin to PATH (where netlify-cli is installed)
      echo -e '\nexport PATH="$(yarn global bin):$PATH"' >> /home/vagrant/.profile 
    SHELL
  end
end