class InviteMailer < ApplicationMailer
    def new_invite(invite, invitee)
        @invite = invite
        @invitee = invitee

        mail(
            to: @invitee.email,
            subject: "New Team Invite"
        )
    end
end