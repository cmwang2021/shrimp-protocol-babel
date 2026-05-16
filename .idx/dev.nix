{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = [ pkgs.nodejs_20 ];
  idx.workspace.onStart = {
    welcome = "echo 'Welcome to PAIN-002: Protocol Babel Fixer Workshop!'";
  };
}
