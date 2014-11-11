class EmailProcessor
  def initialize( email )
    @email = email
  end

  def process
    mail = Mail.new

    mail[ :to ] = "kyle.heneman@gmail.com"
    mail[ :from ] = @email.from
    mail[ :subject ] = @email.subject
    mail[ :body ] = @email.body

    email.attachments.each { | attachment |
      add_file :filename => File.basename( attachment ), :content => attachment
    }
  end
end