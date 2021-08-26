 let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
        let img = await new DIG.Trash().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, 'trash.png');;
