resource "digitalocean_app" "murfittnet" {
  spec {
    name   = "murfittnet"
    region = "lon"

    # domain {
    #   name = "murfitt.net"
    # }

    # domain {
    #   name = "www.murfitt.net"
    # }

    static_site {
      name          = "murfittnet"
      build_command = "rm -r ./public; hugo --destination ./public --minify"
      output_dir    = "/public"

      github {
        branch         = "master"
        deploy_on_push = true
        repo           = "danmurf/murfittnet"
      }
    }
    env {
      key = "HUGO_VERSION"
      value = "0.97.0"
    }

    env {
      key = "HUGO_EXTENDED"
      value = "1"
    }
  }
}
