#!/usr/bin/env perl

use strict;
use warnings;


BEGIN {
	use FindBin qw($Bin);
	push @INC, "$Bin/lib";
}

use Common;

Common->createFolder("/tmp/letsencrypt-auto");

my $rootDir = "/etc/letsencrypt/live/";
my @domains = ("cryptobrawl.online");



for my $domain(@domains) {

	my $dir = $rootDir.$domain."/";
	Common->createFolder($dir);

	my $args = 'le.pl --key '.$dir.'account.pem --csr '.$dir.'cert.pem --csr-key '.$dir.'privkey.pem --crt '.$dir.'fullchain.pem --domains "'.$domain.'" --generate-missing --path /tmp/letsencrypt-auto --debug --live --unlink';

	print `le.pl $args`;

	print "======================================\n";
}
