# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  
  # config.vm.synced_folder "../", "/vagrant"
config.vm.synced_folder ".", "/vagrant", type: "rsync"    

  # Define primary box name for all VM providers
  # More VMs could be added here to build a multi-box install and provision
  # accordingly
    
  config.vm.hostname="PSEUDOVET-bciv"
  config.vm.box = "CentOS 6.7 x86_64 Minimal (VirtualBox Guest Additions 5.0.8, Chef: 12.5.1, Puppet 3.8.4)"
  config.vm.box_url = "https://developer.nrel.gov/downloads/vagrant-boxes/CentOS-6.7-x86_64-v20151108.box"
  
  config.vm.define "PseudoVet", primary: true do |vista|
  end

  config.vm.provider :virtualbox do |vb|
    config.vm.network :private_network, ip: "192.168.33.11"
    # Don't boot with headless mode
    # vb.gui = true
    #  file_to_disk = './tmp/large_disk.vdi'
    #  unless File.exists?(file_to_disk)
    #    vb.customize ['createhd', '--filename', file_to_disk, '--size', 8 * 1024]
    #  end
    #  vb.customize ['storageattach', :id, '--storagectl', 'IDE Controller', '--port', 1, '--device', 0, '--type', 'hdd', '--medium', file_to_disk]
    # Use VBoxManage to customize the VM. For example to change memory:
    vb.customize ["modifyvm", :id, "--memory", "2048"]
  end

 # # Amazon EC2 configuration
 config.vm.provider :aws do |aws, override|
    aws.tags["Name"]="PSEUDOVET-bciv"
    #config.ssh.pty = "true"
    #aws.user_data = "#!/bin/bash\nsed -i -e 's/^Defaults.*requiretty/# Defaults requiretty/g' /etc/sudoers"    
    aws.access_key_id = ENV['access_key_id']
    aws.secret_access_key = ENV['secret_access_key']
    aws.keypair_name = ENV['aws_keyname']
    aws.ami = "ami-48b75c25" # ami must have CentOS 6.x with requiretty disabled in /etc/sudoers
    aws.security_groups = ["VistA"]
    aws.region = "us-east-1"
    aws.instance_type = "m3.medium"
    aws.elastic_ip = ENV['elastic_ip']
    override.vm.box = "dummy"
    override.ssh.username = "vagrant"
    override.ssh.private_key_path = ENV['aws_keypath']
 
    #aws.access_key_id = ENV['AWS_ACCESS_KEY_ID']
    #aws.secret_access_key = ENV['AWS_SECRET_ACCESS_KEY']
    #aws.keypair_name = ENV['AWS_KEYPAIR_NAME']
 end

  # Rackspace Cloud configuration
  config.vm.provider :rackspace do |rs, override|
    rs.username = ENV['RS_USERNAME']
    rs.api_key = ENV['RS_API_KEY']
    rs.flavor = /512MB/
    rs.image = /CentOS 6.7/
    rs.rackspace_region = :ord
    rs.public_key_path = ENV['RS_PUBLIC_KEY']
    override.ssh.private_key_path = ENV['RS_PRIVATE_KEY']
  end
  
  config.vm.provision :shell do |s|
    s.path = "provision/setup.sh"
    s.args = "-e -i " + "#{ENV['instance']}"
  end
end
